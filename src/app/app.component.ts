import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddCardFormComponent } from './add-card-form/add-card-form.component';
import { CardComponent } from './card/card.component';
// import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { provideHttpClient, withFetch } from '@angular/common/http';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AddCardFormComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  // title = 'kanban-board';
  constructor(private apiService: ApiService) {}

  // cardstatus: Array<string> = ['New Task', 'On Hold', 'In Progress', 'Done'];
  cardsList: any[] = [
    {
      keyid: 1,
      status: 'New Task',
      info: [
        { id: 1, name: 'Test the project', dueDate: 'Sun Mar 19 2017', priority: 3 },
        { id: 2, name: 'Send the project by 4pm', dueDate: 'Sun Mar 19 2017', priority: 1 }


      ]
    },
    {
      keyid: 2,
      status: 'On Hold',
      info: [
        { id: 3, name: 'Modifiy the datepicker', dueDate: 'Sun Mar 19 2017', priority: 5 },
        { id: 4, name: 'Modifiy the date formate', dueDate: 'Sun Mar 19 2017', priority: 5 },
        { id: 5, name: 'Validation of Task Form', dueDate: 'Sun Mar 19 2017', priority: 5 },
        { id: 6, name: 'sorting of Task list', dueDate: 'Sun Mar 19 2017', priority: 5 },
        { id: 7, name: 'Comment the code lines', dueDate: 'Sun Mar 19 2017', priority: 5 }



      ]
    },
    {
      keyid: 3,
      status: "In Progress",
      info: [
        { id: 8, name: "Test the Task Edit Menu", "dueDate": "Sun Mar 19 2017", "priority": 3 },
        { id: 9, name: "Create the List Edit Menu", "dueDate": "Sun Mar 19 2017", "priority": 3 },
        { id: 10, name: "Test the List Edit Menu", "dueDate": "Sun Mar 19 2017", "priority": 3 }
      ]
    },

    {
      keyid: 4,
      status: 'Done',
      info: [
        { id: 11, name: 'Understand the requirement', dueDate: 'Fri Mar 17 2017', priority: 1 },
        { id: 12, name: 'Create the design', dueDate: 'Sat Mar 18 2017', priority: 1 },
        { id: 13, name: 'Start the project structure', dueDate: 'Sat Mar 18 2017', priority: 1 },
        { id: 14, name: 'Start Writing the code', dueDate: 'Sat Mar 18 2017', priority: 2 },
        { id: 15, name: 'Create the header section', dueDate: 'Sat Mar 18 2017', priority: 3 },
        { id: 16, name: 'Test the List section', dueDate: 'Sat Mar 18 2017', priority: 3, },
        { id: 17, name: 'Create the Task section', dueDate: 'Sat Mar 18 2017', priority: 3 },
        { id: 18, name: 'Create the Task Edit Menu', dueDate: 'Sat Mar 18 2017', priority: 3 },
        { id: 19, name: 'Create the List Edit Menu', dueDate: 'Sun Mar 19 2017', priority: 3 },
        { id: 20, name: 'Test the List Edit Menu', dueDate: 'Sun Mar 19 2017', priority: 3 }
      ]
    },
  ]

  data:any;


  ngOnInit(): void {  
    this.fetchCardData();
    // console.log(this.cardsList[0].status,"card")

    // Fetch data on initialization
    // this.apiService.getData().subscribe(response => {
    //   this.cardsList = response;
    // });

    // Method to post data
    // submitData(newData: any) {
    //   this.apiService.postData(newData).subscribe(response => {
    //     console.log('Data submitted:', response);
    //   });
    // }
  }

  fetchCardData() {
    this.apiService.getData().subscribe({
      next: (response) => {
        this.data = response;
        console.log('Data fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  onAdded(name: string): void {
    this.cardsList.push(
      {
        status: name,
        info: [

        ]
      }
    )
  }

  cardBoxData(task: any): void {

    const tasks = this.cardsList.find(x => x.status === task.name);
    console.log(tasks, "taskssssssssss")
    task.value.dueDate = new Date(task.value.dueDate).toDateString();
    tasks.info.push(task.value);

  }
}





