import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import { CardBoxComponent } from '../card-box/card-box.component';
import { CardComponent } from '../card/card.component';

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
  @Output() onSearch = new EventEmitter<boolean>();

  sortingPriority(){
    // console.log('sorrrttt box')
    this.sortPriority.emit();
  }

  sortingDuedate(){
    // console.log('sorting duedate')
    this.sortDuedate.emit()
  }
  search(){
    // console.log("i am the search button",);
    this.onSearch.emit();
  }

}
