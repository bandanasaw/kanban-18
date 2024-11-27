import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-card-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-card-form.component.html',
  styleUrl: './add-card-form.component.css',
})

export class AddCardFormComponent {
  hideAddCardForm: boolean = true;

  @Output() added: EventEmitter<string> = new EventEmitter();
  cardName: any;
 
  addCard(inputRef: any) {
    this.added.emit(this.cardName);
    this.cardName = "";
  }

  cancelCard() {
    this.hideAddCardForm = true;

  }
  hideAddCard() {
    this.hideAddCardForm = false;

  }
}
