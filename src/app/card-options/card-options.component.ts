import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../api.service';
// import { CardBoxComponent } from '../card-box/card-box.component';

@Component({
    selector: 'app-card-options',
    imports: [FontAwesomeModule],
    templateUrl: './card-options.component.html',
    styleUrl: './card-options.component.css'
})
export class CardOptionsComponent implements OnInit {

  constructor(private apiService: ApiService){}

  readonly cardDetail = input<any>();
  // @Input() cardDeleted : any

  @Output() cardDeleted = new EventEmitter<number>();
  @Output() edit = new EventEmitter<boolean>();
  @Output() move = new EventEmitter<string>();


  faPenAlt = faPenAlt;
  faTrash = faTrashAlt;


  ngOnInit(): void {
    // console.log(this.cardDeleted, '---------------')
  }
  editButton(e: any){
    this.edit.emit();
  }

  deleteCard(index: number) {
    this.cardDeleted.emit(index);
    // this.cardDeleted.emit(id); 
   

  }
  moveToOnHold(){
    console.log('i am moving button',this.cardDetail())
    this.move.emit();

  }

}


