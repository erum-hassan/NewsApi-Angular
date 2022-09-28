import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { NewsapiserviceService } from './newsapiservice.service';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    BusinessComponent,
    SportsComponent,
    TechnologyComponent,
   
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
