import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CocktailSummary } from '../../../core/models/cocktail.model';
import { MediaUrlPipe } from '../../../shared/pipes/media-url.pipe';

@Component({
  selector: 'app-cocktail-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink, DatePipe, MediaUrlPipe],
  template: `
    <div class="glass-panel overflow-hidden rounded-3xl">
      <div class="overflow-x-auto">
        <table mat-table [dataSource]="items()" class="w-full !min-w-[820px]">
          <ng-container matColumnDef="image">
            <th mat-header-cell *matHeaderCellDef>Preview</th>
            <td mat-cell *matCellDef="let item">
              <div class="my-3 h-14 w-20 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                @if (item.imageUrl) {
                  <img
                    [src]="item.imageUrl | mediaUrl"
                    [alt]="item.name"
                    class="h-full w-full object-cover"
                  >
                } @else {
                  <div class="grid h-full w-full place-items-center text-[10px] uppercase tracking-widest text-white/20">
                    no image
                  </div>
                }
              </div>
            </td>
          </ng-container>

          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef>Коктейль</th>
            <td mat-cell *matCellDef="let item">
              <a
                [routerLink]="['/cocktails', item.id]"
                class="font-semibold transition hover:text-[#72f6ff]"
              >
                {{ item.name }}
              </a>
              <div class="mt-1 max-w-md truncate text-xs text-white/35">
                {{ item.description }}
              </div>
            </td>
          </ng-container>

          <ng-container matColumnDef="createdAt">
            <th mat-header-cell *matHeaderCellDef>Добавлен</th>
            <td mat-cell *matCellDef="let item">
              <span class="text-sm text-white/55">
                {{ item.createdAt | date: 'dd.MM.yyyy, HH:mm' }}
              </span>
            </td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef></th>
            <td mat-cell *matCellDef="let item">
              <div class="flex justify-end gap-2">
                <a mat-button [routerLink]="['/cocktails', item.id]">Открыть</a>
                <a mat-button [routerLink]="['/cocktails', item.id, 'edit']">Изменить</a>
                <button mat-button type="button" (click)="remove.emit(item)">Удалить</button>
              </div>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="columns"></tr>
          <tr mat-row *matRowDef="let row; columns: columns"></tr>
        </table>
      </div>
    </div>
  `
})
export class CocktailTableComponent {
  readonly items = input.required<CocktailSummary[]>();
  readonly remove = output<CocktailSummary>();

  readonly columns = ['image', 'name', 'createdAt', 'actions'];
}
