import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { CardInputComponent } from "../card-input/card-input.component";
import { CardBoxComponent } from "../card-box/card-box.component";
import { AddCardComponent } from "../add-card/add-card.component";
import { FormsModule } from '@angular/forms';


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


  // searchTerm: string = '';
  searchTerm: any;
  filteredCards: string[] = [];
  faEllipsisH = faEllipsisH;
  showAddCard = signal<boolean>(false);
  isSerachOn= signal<boolean>(true);
  isSerach= signal<boolean>(false);
  isSearchApplied= signal<boolean>(false);

  ngOnInit(): void {
    // console.log(this.card.info[0].name, "cardsssssssssssss")
  }

  onClick(e: any): void {
    this.showAddCard.set(true); 
    e.stopPropagation();
    const event = () => {
      this.showAddCard.set(false);
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
    this.isSerachOn.set(false); 
    this.isSerach.set(true); 
  }

  searchButton(): void {
    if(String(this.searchTerm) !="null" && String(this.searchTerm).length < 3){
      return;
    }
    this.isSearchApplied.set(true);
    this.filteredCards = this.card.info.filter((item: any) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.searchTerm ='';
  }

}
