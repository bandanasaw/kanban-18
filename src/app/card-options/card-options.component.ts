import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import { CardBoxComponent } from '../card-box/card-box.component';

@Component({
  selector: 'app-card-options',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.css'
})
export class CardOptionsComponent implements OnInit {
  @Input() cardDetail :any;
  // @Input() cardDeleted : any

  @Output() cardDeleted = new EventEmitter<number>();

  faPenAlt = faPenAlt;
  faTrash = faTrashAlt;

  ngOnInit(): void {
    console.log(this.cardDeleted,'---------------' )
  }

  deleteCard(index: number): void {
    console.log('i am deleted',index)
      this.cardDeleted.emit(index); 
      // this.cardDeleted.emit(id); 
    
  }

 

  }


