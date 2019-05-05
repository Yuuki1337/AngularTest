import { AbstractControl, ValidatorFn, ValidationErrors, FormControl, FormGroup } from '@angular/forms'

export function isRequiredValidator(identifiant, titre): ValidatorFn {



    return (control: AbstractControl): ValidationErrors | null => {
      
        const value1 = control.get(identifiant).value;
        // Get second control value
        const value2 = control.get(titre).value;
        console.log(value1)
        console.log(value2)
        
            if(value1 == "" && value2 == ""){

                return { 'isRequired':{value: false , expected: true}}

    }
        
    else {

        return  null

    }
       
}
}
export function rangeDateValidator(min: Date,max: Date){

    return (control: AbstractControl): ValidationErrors | null => {
        // parse control value to Date
        
        const date = new Date(control.value);
        // check if control value is superior to date given in parameter
        if (min.getTime() < date.getTime() &&  date.getTime() < max.getTime()) {
          return null;
        } else {
          // 'min' is the error key 
          return { 'min': { value: control.value, expected: min } };
    
        }
      };

}
    

