import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { AuthFacade } from '../../../core/auth/auth.facade';
import { TextInputComponent } from '../../../shared/ui/text-input/text-input.component';
import { AlertComponent } from '../../../shared/ui/alert/alert.component';
import { AuthLayoutComponent } from '../components/auth-layout.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    AsyncPipe,
    AuthLayoutComponent,
    TextInputComponent,
    AlertComponent
  ],
  template: `
    <app-auth-layout
      eyebrow="регистрация"
      title="Регистрация"
      description="Создайте аккаунт, чтобы сохранять рецепты."
    >
      <form [formGroup]="form" class="space-y-3" (ngSubmit)="submit()">
        <ui-text-input
          label="Имя"
          autocomplete="name"
          [control]="form.controls.name"
          error="Минимум 2 символа"
        />

        <ui-text-input
          label="Email"
          type="email"
          autocomplete="email"
          [control]="form.controls.email"
          error="Введите корректный email"
        />

        <ui-text-input
          label="Пароль"
          type="password"
          autocomplete="new-password"
          [control]="form.controls.password"
          error="Минимум 8 символов, буква и цифра"
        />

        @if (error$ | async; as error) {
          <ui-alert [message]="error" />
        }

        <button
          mat-flat-button
          type="submit"
          class="!mt-5 !h-12 !w-full"
          [disabled]="form.invalid || submitting"
        >
          {{ submitting ? 'Создание...' : 'Создать аккаунт' }}
        </button>

        <div class="pt-4 text-center text-sm text-white/45">
          Уже есть аккаунт?
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
