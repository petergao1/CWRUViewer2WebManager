import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppComponent } from './app.component';  
  
import { HttpClientModule } from '@angular/common/http';   
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';  
  
@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,  
    HttpClientModule,  
    FormsModule, NoopAnimationsModule,
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }