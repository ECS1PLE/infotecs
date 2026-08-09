import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { AuthFacade } from '../../../core/auth/auth.facade';
import { AuthLayoutComponent } from '../components/auth-layout.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    AuthLayoutComponent
  ],
  template: `
    <app-auth-layout
      eyebrow="регистрация"
      title="Новый профиль"
      description="Создайте приватное пространство для своей барной карты."
    >
      <form [formGroup]="form" class="space-y-3" (ngSubmit)="submit()">
        <mat-form-field appearance="outline">
          <mat-label>Имя</mat-label>
          <input matInput formControlName="name" autocomplete="name">
          @if (form.controls.name.invalid && form.controls.name.touched) {
            <mat-error>Минимум 2 символа</mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Email</mat-label>
          <input matInput type="email" formControlName="email" autocomplete="email">
          @if (form.controls.email.invalid && form.controls.email.touched) {
            <mat-error>Введите корректный email</mat-error>
          }
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Пароль</mat-label>
          <input
            matInput
            type="password"
            formControlName="password"
            autocomplete="new-password"
          >
          @if (form.controls.password.invalid && form.controls.password.touched) {
            <mat-error>Минимум 8 символов, буква и цифра</mat-error>
          }
        </mat-form-field>

        @if (error$ | async; as error) {
          <div class="rounded-xl border border-[#ff4d73]/25 bg-[#ff4d73]/10 px-4 py-3 text-sm text-[#ff8da6]">
            {{ error }}
          </div>
        }

        <button
          mat-flat-button
          type="submit"
          class="!mt-5 !h-12 !w-full"
          [disabled]="form.invalid || submitting"
        >
          {{ submitting ? 'Создаем...' : 'Создать аккаунт' }}
        </button>

        <div class="pt-4 text-center text-sm text-white/45">
          Уже есть профиль?
          <a routerLink="/auth/login" class="font-semibold text-white hover:text-[#72f6ff]">
            Войти
          </a>
        </div>
      </form>
    </app-auth-layout>
  `
})
export class RegisterPageComponent {
  private readonly authFacade = inject(AuthFacade);
  private readonly router = inject(Router);

  readonly error$ = this.authFacade.error$;
  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(60)]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).+$/)
      ]
    })
  });

  submitting = false;

  submit(): void {
    if (this.form.invalid || this.submitting) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.authFacade.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.submitting = false;
        void this.router.navigate(['/cocktails']);
      },
      error: () => {
        this.submitting = false;
      }
    });
  }
}
