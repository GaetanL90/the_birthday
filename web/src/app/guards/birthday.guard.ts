import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BirthdayService } from '../services/birthday.service';

export const birthdayGuard: CanActivateFn = () => {
  const birthday = inject(BirthdayService);
  const router = inject(Router);
  if (birthday.unlocked()) {
    return true;
  }
  return router.parseUrl('/');
};
