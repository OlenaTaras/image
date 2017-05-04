import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images;

  constructor(){
    this.images = [
      {
        "url":"https://pp.userapi.com/c638017/v638017161/c0fd/FtZeigZeOts.jpg",
        "title":"Aliquam erat volutpat",
        "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
        "url":"https://pp.userapi.com/c638017/v638017161/c0fd/FtZeigZeOts.jpg",
        "title":"Aliquam erat volutpat",
        "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
        "url":"https://pp.userapi.com/c638017/v638017161/c0fd/FtZeigZeOts.jpg",
        "title":"Aliquam erat volutpat",
        "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      },
      {
        "url":"https://pp.userapi.com/c638017/v638017161/c0fd/FtZeigZeOts.jpg",
        "title":"Aliquam erat volutpat",
        "caption":"imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit."
      }
    ];
  }
}
