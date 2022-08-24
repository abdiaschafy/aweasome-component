import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmEqualValidator(
  main: string,
  confirm: string
): ValidatorFn {
  return (control: AbstractControl): null | ValidationErrors => {
    if (!control.get(main) || !control.get(confirm)) {
      return {
        confirmEqual: 'Invalid control names',
      };
    }
    const mainValue = control.get(main)!.value;
    const confirmValue = control.get(confirm)!.value;

    return mainValue === confirmValue
      ? null
      : {
          confirmEqual: {
            main: mainValue,
            confirm: confirmValue,
          },
        };
  };
}
