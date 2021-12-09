/*import { AbstractControl, ValidationErrors } from "@angular/forms"

export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors |null {


let value: string = control.value || '';
  let msg="";
  if (!value) {
    return null;
  }

  let upperCaseCharacters = /[A-Z]+/g;
  let specialCharacters = /[#]+/;
  if (upperCaseCharacters.test(value) === false || specialCharacters.test(value) === false) {
    return {
        passwordStrength: 'Password must contain  uppercase letters, and special character #.'
    }
  } 
}*/

import { FormControl } from '@angular/forms';

export interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidator {

    public static strong(control: FormControl): ValidationResult | null {
    
        let hasUpper = /[A-Z]/.test(control.value);
        let specialCharacters = /[#]+/.test(control.value);
        const valid =  hasUpper && specialCharacters;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return null;
    }
}