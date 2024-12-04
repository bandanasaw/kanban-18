import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-card-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-card-form.component.html',
  styleUrl: './add-card-form.component.css',
})

export class AddCardFormComponent {
  hideAddCardForm = signal<boolean>(true);

  @Output() added: EventEmitter<string> = new EventEmitter();
  cardName: any;
 
  addCard(inputRef: any) {
    //  this.cardName = "";
    this.added.emit(this.cardName);
    this.hideAddCardForm.set(true);
   
  }

  cancelCard() {
    this.hideAddCardForm.set(true);

  }
  hideAddCard() {
    this.hideAddCardForm.set(false);

  }
}
