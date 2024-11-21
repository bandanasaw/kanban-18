import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTasks, faClock, faFlag, faEdit } from '@fortawesome/free-solid-svg-icons';
import { CardOptionsComponent } from "../card-options/card-options.component";

@Component({
  selector: 'app-card-box',
  standalone: true,
  imports: [FontAwesomeModule, CardOptionsComponent],
  templateUrl: './card-box.component.html',
  styleUrl: './card-box.component.css'
})
export class CardBoxComponent implements OnInit {
  @Input() cardDetail: any;
  @Input() card: any;


  // @Output() cardDeleted: EventEmitter<number> = new EventEmitter<number>();
  @HostBinding('class.my-app-cardbox-class') myClass: boolean = true;


  faTasks = faTasks;
  faTimesCircle = faClock;
  faFlag = faFlag;
  faEdit = faEdit;
  // buttonDisabled : boolean = true;
  showEditButton: boolean = false;
  showCardOptions: boolean = false;
  ngOnInit(): void {
    // console.log(this.cardDetail);
    console.log(this.card.info)
  }

  
  onclick(e: any): void {
    this.showCardOptions = true;
    e.stopPropagation();
    const event = () => {
      this.showCardOptions = false;
      document.body.removeEventListener('click', event);
    }
    document.body.addEventListener('click', event);

    // console.log(e, 'i am clicked');

  }

  @HostListener('mouseenter')
  mouseOver() {
    // console.log(' I am oon cardbox')
    this.showEditButton = true;
  }

  @HostListener('mouseleave')
  mouseOut() {
    // console.log(' I am oon cardbox on out')
    this.showEditButton = false;
  }

  onCardDeleted(index: number): void {
    console.log("Removeeeeeeeeeee")
    this.card.info.splice(index, 1); // Remove the card from the parent
    console.log(`Card at index ${index} removed.`,"parentttttttttttt");
    // this.card.info = this.card.info.filter(() => this.card.id !== id);
    // console.log(`Card with ID ${id} removed.`);
  }

  // deleteCardDetail(index: number) {
  //   if (this.card.info && index > -1 && index < this.card.info.length) {
  //     this.card.info.splice(index, 1); 
  //     console.log(`Card at index ${index} removed.`);
  //   } else {
  //     console.error('Invalid index or cardDetail is not defined.');
  //   }
  // }

}
