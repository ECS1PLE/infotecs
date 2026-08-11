import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ui-text-input',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field appearance="outline">
      <mat-label>{{ label() }}</mat-label>
      <input
        matInput
        [type]="type()"
        [formControl]="control()"
        [attr.autocomplete]="autocomplete() || null"
        [attr.maxlength]="maxLength() || null"
      >
      @if (control().invalid && control().touched && error()) {
        <mat-error>{{ error() }}</mat-error>
      }
    </mat-form-field>
  `
})
export class TextInputComponent {
  readonly control = input.required<FormControl<string>>();
  readonly label = input.required<string>();
  readonly type = input('text');
  readonly autocomplete = input('');
  readonly maxLength = input<number | null>(null);
  readonly error = input('');
}
