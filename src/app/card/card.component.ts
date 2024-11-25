import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { CardInputComponent } from "../card-input/card-input.component";
import { CardBoxComponent } from "../card-box/card-box.component";
import { AddCardComponent } from "../add-card/add-card.component";
import { FormsModule } from '@angular/forms';
// import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule, CardInputComponent, CardBoxComponent, AddCardComponent, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() card: any;
  // @Input() cardDetail: any;
  @Output() addedCardboxData: EventEmitter<any> = new EventEmitter();
  // @Output() searchEvent = new EventEmitter<string>();

  searchTerm: string = '';
  filteredCard: string[] = [];

  faEllipsisH = faEllipsisH;
  showAddCard: boolean = false;
  isSerachOn: boolean = true;
  isSerach: boolean = false;

  ngOnInit(): void {
    console.log(this.card.info[0].name, "cardsssssssssssss")
    console.log(this.filteredCard)
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
    console.log('cardDataInfo');
    this.addedCardboxData.emit({ name: this.card.status, value: cardDataInfo });

  }


  // Sort the array in ascending order of priority
  onsortPriority(): void {
    this.card.info.sort((a: any, b: any) => a.priority - b.priority);
  }


  // Sort the array in ascending order of dueDate
  onsortDueDate(): void {
    this.card.info.sort((a: any, b: any) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();
      return dateA - dateB;
    });
  }

  onSearch() {
    this.isSerachOn = false;
    this.isSerach = true;
  }

  searchButton(): void {
    console.log('i am serach burtton')

    const filteredCards = this.card.info.filter((item: any, index: string | number) =>
      // item.name.includes(this.searchTerm)
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    console.log(filteredCards, "filteredCards")
    this.filteredCard.push(filteredCards)
    console.log(this.filteredCard, "filteredCardddddddddddddddd")
  }

}
