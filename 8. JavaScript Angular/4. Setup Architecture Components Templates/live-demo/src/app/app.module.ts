import { LoggingService } from './shared/logging.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // new

@NgModule({ // Meta Data
  declarations: [ // here goes components, directives, pipes
    AppComponent,
],
  imports: [ // here goes the modules
    BrowserModule, // exports Common Module for All directives
    FormsModule // new
  ],
  providers: [ LoggingService ], // here goes services
  bootstrap: [AppComponent] // root component to start, should only be in this root module
  // exports: [ MyComponent ] // Can export module, directive, pipe, component
})
export class AppModule { }
