import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from 'src/app/confirmed.validators';
import { PasswordValidator } from 'src/app/password.validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  alert: boolean = false;
  

  @Input() registrationForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder,private router: Router) {
    this.registrationForm = this.fb.group({
      username : ['',[Validators.required,Validators.pattern("A-Za-z0-9")]],
      password: [null, Validators.compose([
        Validators.required, Validators.minLength(8), PasswordValidator.strong])],
      confirm_password: [null, Validators.compose([
          Validators.required, Validators.minLength(8), PasswordValidator.strong])]
      }, { 
        validator: ConfirmedValidator('password', 'confirm_password')
      })
   }

  ngOnInit(): void {
  }

  closeAlert(){
    this.alert = false;
  }


  onSubmit(){
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value)
    }
    else{
      alert("FILL ALL FIELDS")
    }
  }

  get username(){
    return this.registrationForm.get('username');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  get confirm_password(){
    return this.registrationForm.get('confirm_password');
  }

  omit_special_char(event: { charCode: any; }){   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
 }

}
