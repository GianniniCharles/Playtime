import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  {path: '',
    component: HomeComponent,
    data: {title: 'ThreeSteps', depth: 1}
  },
  {path: 'about',
  component: AboutComponent,
  data: {title: false, depth: 2}
},


]





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
    {enableTracing: true}
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
