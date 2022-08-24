import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validValidator(): ValidatorFn {
  return (control: AbstractControl): null | ValidationErrors => {
    if (control.value.includes('VALID')) {
      return null;
    } else {
      return {
        validValidator: control.value,
      };
    }
  };
}
