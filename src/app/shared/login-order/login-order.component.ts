import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-order',
  templateUrl: './login-order.component.html',
  styleUrls: ['./login-order.component.scss']
})
export class LoginOrderComponent {

  public hide: boolean = false;
  public form: FormGroup = this._fb.group({
    firstName: ['name'],
    lastName: ['lastname'],
    email: ['email', [this.myValidator]],
    phone: ['phone']
  });

  public constructor(
    private _fb: FormBuilder
  ) { }

  public myValidator(formValue: any): any {
    if (formValue.value.length < 3) {
      return { 'no-equal': true };
    } else {
      return null;
    }
  }
}
