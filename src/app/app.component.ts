import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddCardFormComponent } from './add-card-form/add-card-form.component';
import { CardComponent } from './card/card.component';
// import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
// import { provideHttpClient, withFetch } from '@angular/common/http';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AddCardFormComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cardsList: any[] = [];

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.fetchCardData();

    console.log(this.cardsList)
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
        this.cardsList = response.data;
        console.log('Data fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  onAdded(name: string): void {
    const data = {
      "status": name,
      "info": []
    }

    this.apiService.postData(data).subscribe({
      next: (response) => {
        this.fetchCardData();
      },
      error: (error) => {
        console.error('Error post data:', error);
      },
    });
  }

  cardBoxData(task: any): void {
    const data = {
      status: task.name,
      info: [
        {
          name: task.value.name,
          dueDate: new Date(task.value.dueDate).toDateString(),
          priority: task.value.priority,
        },
      ],
    };
  
    this.apiService.postData(data).subscribe({
      next: (response) => {
        const tasks = this.cardsList.find((x: { status: string }) => x.status === task.name);
        if (tasks) {
          tasks.info.push(data.info[0]); // Use the formatted data
        }
        this.fetchCardData();
      },
      error: (error) => {
        console.error('Error posting data:', error);
      },
    });
  }
  
}





