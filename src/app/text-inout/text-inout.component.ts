import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-inout',
  templateUrl: './text-inout.component.html',
  styleUrls: ['./text-inout.component.css']
})
export class TextInoutComponent implements OnInit {
  // @Input() control: FormControl
  @Input() basicInfo: FormGroup

  constructor() { }

  ngOnInit(): void {
    console.log(this.basicInfo)
  }

}
