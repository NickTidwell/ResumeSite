import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'myResumeSite';
   currentPage: string = 'experience';  



   setPage(pageName: string){
     this.currentPage = pageName;
   }
}
