import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-card-input',
    imports: [ReactiveFormsModule],
    templateUrl: './card-input.component.html',
    styleUrl: './card-input.component.css'
})
export class CardInputComponent {
  hideCardInputForm = signal<boolean>(true);

  @Output() addedCardbox: EventEmitter<any> = new EventEmitter();
  taskDataForm: UntypedFormGroup = new UntypedFormGroup(
    {
      name: new UntypedFormControl('', [Validators.required, Validators.maxLength(20)]),
      dueDate: new UntypedFormControl('', Validators.required),
      priority: new UntypedFormControl('', Validators.required)
    });

  addForm() {
    // console.log(this.taskDataForm.value, this.taskDataForm);
    // const name = this.taskDataForm.get('name');

    this.addedCardbox.emit(this.taskDataForm.value);
    this.taskDataForm.reset();
    this.hideCardInputForm.set(true);

  }
  cancelForm() {
    console.log('i am cancel button clicked')
    this.hideCardInputForm.set(true);
    this.taskDataForm.reset();

  }
  hideCardInput() {
    this.hideCardInputForm.set(false);
  }

}
