import { Component, Input, signal, computed, effect, HostListener, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTasks, faClock, faFlag, faEdit } from '@fortawesome/free-solid-svg-icons';
import { CardOptionsComponent } from "../card-options/card-options.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-box',
  standalone: true,
  imports: [FontAwesomeModule, CardOptionsComponent, FormsModule],
  templateUrl: './card-box.component.html',
  styleUrl: './card-box.component.css'
})
export class CardBoxComponent implements OnInit{

  @Input() cardDetail: any;
  @Input() card: any;

  faTasks = faTasks;
  faTimesCircle = faClock;
  faFlag = faFlag;
  faEdit = faEdit;

  showEditButton  = signal<boolean>(false);
  showCardOptions = signal<boolean>(false);
  isEditButtonClick = signal<boolean>(true);

  //  inputValue = signal<string>('');
  // task = signal<any[]>([]);
 
  ngOnInit(): void {
    // console.log(this.cardDetail)
  }

  onclick(e: any): void {
    this.showCardOptions.set(true);
    e.stopPropagation();
    const event = () => {
      this.showCardOptions.set(false);
      document.body.removeEventListener('click', event);
    };
    document.body.addEventListener('click', event);
  }

  // Mouse hover actions
  // @HostListener('mouseenter')
  mouseOver() {
    console.log('mouserover')
    this.showEditButton.set(true);
  }


  // @HostListener('mouseleave')
  mouseOut() {
    console.log('mouseout')
    this.showEditButton.set(false);
  }

  onCardDeleted(index: number): void {
    this.card.info.splice(index, 1);
  }

  onEdit() {
    this.isEditButtonClick.set(false);
  }

    cancel(e: any) {
    this.isEditButtonClick.set(true);
  }

  updateEdit() {
    const formattedDate = new Date(this.cardDetail.dueDate).toDateString();
    this.cardDetail.dueDate = formattedDate;

    console.log('Updated card:', this.cardDetail);
    this.isEditButtonClick.set(true);
    // this.inputValue.set(this.cardDetail);
    // this.task.set([...this.task(), this.inputValue()]);
    // console.log(this.task(), "Updated Tasks");
    //   this.isEditButtonClick.set(true);
  }

  //   moveCard(event: any){
//     console.log('moving card')
//     const previousIndex = event.previousIndex;
//     const currentIndex = event.currentIndex;
//     const item = this.card.splice(previousIndex, 1)[0];
//    console.log(item,'item');
    
//     this.card.splice(currentIndex, 0, item);
//   }
}










// import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faTasks, faClock, faFlag, faEdit } from '@fortawesome/free-solid-svg-icons';
// import { CardOptionsComponent } from "../card-options/card-options.component";
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-card-box',
//   standalone: true,
//   imports: [FontAwesomeModule, CardOptionsComponent, FormsModule],
//   templateUrl: './card-box.component.html',
//   styleUrl: './card-box.component.css'
// })
// export class CardBoxComponent implements OnInit {
//   // options: Intl.DateTimeFormatOptions = { weekday: 'short',month: 'short', year: 'numeric', day: 'numeric' };
//   @Input() cardDetail: any;
//   @Input() card: any;
//   @HostBinding('class.my-app-cardbox-class') myClass: boolean = true;


//   faTasks = faTasks;
//   faTimesCircle = faClock;
//   faFlag = faFlag;
//   faEdit = faEdit;
//   // buttonDisabled : boolean = true;
//   showEditButton: boolean = false;
//   showCardOptions: boolean = false;
//   isEditButtonClick: boolean = true;


//   ngOnInit(): void {
//     console.log(this.card)
//    }

//   onclick(e: any): void {
//     this.showCardOptions = true;
//     e.stopPropagation();
//     const event = () => {
//       this.showCardOptions = false;
//       document.body.removeEventListener('click', event);
//     }
//     document.body.addEventListener('click', event);
//   }

//   @HostListener('mouseenter')
//   mouseOver() {
//     this.showEditButton = true;
//   }

//   @HostListener('mouseleave')
//   mouseOut() {
//     this.showEditButton = false;
//   }

//   // Remove the card from the parent
//   onCardDeleted(index: number): void {
//     this.card.info.splice(index, 1);
//   }

//   onEdit() {
//     this.isEditButtonClick = false;
//   }

//   updateEdit(e: any) {
//     const formattedDate = new Date(this.cardDetail.dueDate).toDateString();
//     this.cardDetail.dueDate = formattedDate;

//     // console.log('Updated card:', this.cardDetail);
//     this.isEditButtonClick = true;
//   }

//   cancel(e: any) {
//     this.isEditButtonClick = true;
//   }

//   moveCard(event: any){
//     console.log('moving card')
//     const previousIndex = event.previousIndex;
//     const currentIndex = event.currentIndex;
//     const item = this.card.splice(previousIndex, 1)[0];
//    console.log(item,'item');
    
//     this.card.splice(currentIndex, 0, item);
//   }
// }

