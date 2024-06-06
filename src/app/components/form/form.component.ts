import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const phoneNumberPattern = /^(\+380|380)?\d{9}$|^\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class FormComponent {
  form = new FormGroup({
    fullNameForm: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    }),
    addressForm: new FormGroup({
      streetAddress: new FormControl('', [Validators.required]),
      streetAddressAdditional: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
    }),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(phoneNumberPattern)
    ]),
    email: new FormControl(''),
  });


  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
