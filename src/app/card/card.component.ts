import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { CardInputComponent } from "../card-input/card-input.component";
import { CardBoxComponent } from "../card-box/card-box.component";
import { AddCardComponent } from "../add-card/add-card.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule, CardInputComponent, CardBoxComponent, AddCardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() card: any;
//  @Input() cardDetail: any[] = [];
  @Output() addedCardboxData: EventEmitter<any> = new EventEmitter();
 
  faEllipsisH = faEllipsisH;
  showAddCard: boolean = false;


  ngOnInit(): void {
    // console.log(this.card.info,"cardsssssssssssss")
  }

  onClick(e: any): void {
      this.showAddCard = true;
      e.stopPropagation();
      const event = () => {
          this.showAddCard = false;
          document.body.removeEventListener('click', event);
      }
      document.body.addEventListener('click', event);
  }

  addCardBox(cardDataInfo: any) {
      console.log(cardDataInfo, 'cardDataInfo');
      this.addedCardboxData.emit({ name: this.card.status, value: cardDataInfo });
  }
 

}
