import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() sortPriority = new EventEmitter<number>();
  @Output() sortDuedate = new EventEmitter<number>();

  sortingPriority(){
    // console.log('sorrrttt box')
    this.sortPriority.emit();
  }

  sortingDuedate(){
    console.log('sorting duedate')
    this.sortDuedate.emit()
  }

}
