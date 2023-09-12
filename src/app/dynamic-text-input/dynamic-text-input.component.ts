import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-text-input',
  templateUrl: './dynamic-text-input.component.html',
  styleUrls: ['./dynamic-text-input.component.css']
})
export class DynamicTextInputComponent implements OnInit {
  @Input() hobbies: FormArray<FormControl<string>>
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.hobbies)
  }

}
