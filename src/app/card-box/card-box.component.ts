import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
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

  @HostBinding('class.my-app-cardbox-class') myClass: boolean = true;


  faTasks = faTasks;
  faTimesCircle = faClock;
  faFlag = faFlag;
  faEdit = faEdit;
  // buttonDisabled : boolean = true;
  showEditButton: boolean = false;
  showCardOptions: boolean = false;
  ngOnInit(): void {

  }
  onclick(e: any): void {
    this.showCardOptions = true;
    e.stopPropagation();
    const event = () => {
      this.showCardOptions = false;
      document.body.removeEventListener('click', event);
    }
    document.body.addEventListener('click', event);

    console.log(e, 'i am clicked');

  }

  @HostListener('mouseenter')
  mouseOver() {
    console.log(' I am oon cardbox')
    this.showEditButton = true;
  }

  @HostListener('mouseleave')
  mouseOut() {
    console.log(' I am oon cardbox on out')
    this.showEditButton = false;
  }

}
