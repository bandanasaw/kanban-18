import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-options',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.css'
})
export class CardOptionsComponent {
  faPenAlt = faPenAlt;
  faTrash = faTrashAlt;
  remove() {
      console.log('i am remove buttom clicked');

  }

}
