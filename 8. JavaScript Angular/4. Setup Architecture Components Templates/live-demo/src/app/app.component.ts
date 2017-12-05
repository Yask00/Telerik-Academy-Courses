import { Component, OnInit } from '@angular/core';
import { LoggingService } from './shared/logging.service';

@Component({ // Meta Data
  selector: 'app-root', // have to be unique
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LoggingService ]
})

export class AppComponent implements OnInit {
  title = 'app';
  isHidden = true;
  persons = [
    {
      firstName: 'Gosho',
    },
    {
      firstName: 'Gosho1',
    },
  ];

  constructor (private loggingService: LoggingService) { // dependency Injection

  }

  ngOnInit() {
    this.loggingService.info('init');
  }

}
