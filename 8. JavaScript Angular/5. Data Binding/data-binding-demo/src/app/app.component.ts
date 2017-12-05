import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnTitle = 'Submit';
  name: string;
  url: string;

  images = [
    {
      imgURL: 'http://alt-world.com/altworld/wp-content/uploads/2011/04/ninjas4501.png',
    },
    {
      imgURL: 'http://wpninjas.com/wp-content/themes/ninja-theme/assets/wp-ninjas/brand-wpninjas-symbol.png',
    },
    {
      imgURL: 'http://static.comicvine.com/uploads/original/3/36657/1803026-ninjas.png',
    }
  ];
  getNumber() {
    return 42;
  }

  getClass() {
    return 'test2';
  }


  constructor() {
    this.name = 'Pesho';
    this.url = 'http://alt-world.com/altworld/wp-content/uploads/2011/04/ninjas4501.png'
    console.log(this.name);
  }
  changeName(val) {
     console.log(val);
  }
}
