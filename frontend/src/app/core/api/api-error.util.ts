import { HttpErrorResponse } from '@angular/common/http';

export function getApiErrorMessage(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    const message = error.error?.message;
    if (typeof message === 'string' && message.length > 0) {
      return message;
    }
  }

  return 'Что-то пошло не так. Попробуйте еще раз.';
}
