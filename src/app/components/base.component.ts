import { OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DataService } from '../services/data.service';

export abstract class BaseComponent<Type> implements OnInit {

  form: FormGroup;

  item: Type;
  items: Type[];
  currentId: any;
  errors: string;

  constructor(protected dataService: DataService<Type>, protected builder: FormBuilder) { }

  abstract getClassName(): string;

  abstract getFormErrors(): any;

  abstract getValidationMessages(): any;

  abstract buildForm();

  abstract setForm(item: Type);

  abstract resetForm();

  ngOnInit(): void {
    this.form = this.buildForm();

    this.loadAll();

    this.onValueChanged(this.form, this.getFormErrors(), this.getValidationMessages());

    this.form.valueChanges
      .subscribe(
        data => { this.onValueChanged(this.form, this.getFormErrors(), this.getValidationMessages(), data); },
        error => this.errors = <any>error.message);
  }

  loadAll(): void {
    this.resetForm();
    this.dataService.list().subscribe(
      result => {
        this.items = result;
        this.errors = null;
      },
      error => this.errors = <any>error.message);
  }

  save(): void {
    const item = this.form.value;
    item['$class'] = this.getClassName();
    this.beforeSave(item);

    this.dataService.save(item).subscribe(
      () => this.loadAll(),
      error => this.errors = <any>error.message);
  }

  protected beforeSave(item: Type) {
  }

  delete(): void {
    this.dataService.delete(this.currentId).subscribe(
      () => this.loadAll(),
      error => this.errors = <any>error.message);
  }

  setId(id: any): void {
    this.currentId = id;
  }

  editForm(id: any): void {
    this.dataService.one(id).subscribe(
      result => { this.item = result; this.setForm(result); },
      error => this.errors = <any>error.message);
  }

  private onValueChanged(form: FormGroup, formErrors: object, validationMessages: object, data?: any) {
    if (!form) { return; }
    for (const field in formErrors) {
      if (formErrors.hasOwnProperty(field)) {
        // Clear previous error message (if any)
        formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
