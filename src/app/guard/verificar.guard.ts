import { CanActivateFn } from '@angular/router';

export const verificarGuard: CanActivateFn = (route, state) => {
  return true;
};
