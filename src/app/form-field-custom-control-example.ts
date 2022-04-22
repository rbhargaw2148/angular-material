import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-field-custom-control-example',
  templateUrl: 'form-field-custom-control-example.html',
})
export class FormFieldCustomControlExample {
  form: FormGroup = new FormGroup({
    tel: new FormControl(new MyTel('', '', '')),
  });
}

/** Data structure for holding telephone number. */
export class MyTel {
  constructor(
    public area: string,
    public exchange: string,
    public subscriber: string
  ) {}
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
