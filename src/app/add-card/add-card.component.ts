import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent {
  faPenAlt = faPenAlt;
  faTrash =  faTrashAlt;

  remove() {
      console.log('i am remove card');
  }

}
