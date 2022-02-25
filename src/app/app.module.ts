import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxOrgChartModule } from 'ngx-org-chart';
 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxOrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
