import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup



  ngOnInit() {
    this.signUpForm = new FormGroup<IFormInterface>({
      basicInfo: new FormGroup({
        username: new FormControl('nullsss', Validators.required),
        email: new FormControl('null@asd.asd', [Validators.email, Validators.required]),
      }),
      gender: new FormControl<GenderType>('female', Validators.required),
      hobbies: new FormArray<FormControl<string>>([
        new FormControl('asd', Validators.required),
        new FormControl('kokkoras', Validators.required),
      ])
    })
  }

  formSubmit() {
    console.log(this.signUpForm.value)
  }

  onAddHobby() {
    (this.signUpForm.get('hobbies') as FormArray<FormControl<string>>).push(new FormControl('', Validators.required))
  }

  get hobbies() {
    return (this.signUpForm.get('hobbies') as FormArray<FormControl<string>>).controls
  }
}

interface IFormInterface {
  basicInfo: FormGroup<{
    username: FormControl<string>,
    email: FormControl<string>
  }>,
  gender: FormControl<GenderType>,
  hobbies: FormArray<FormControl<string>>
}

type GenderType = 'male' | 'female'