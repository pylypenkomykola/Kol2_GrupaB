import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MPForumComponent } from './components/mp-forum/mp-forum.component';
import { MPForumDetailsComponent } from './components/mp-forum-details/mp-forum-details.component';
import { MPForumItemComponent } from './components/mp-forum-item/mp-forum-item.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MPForumComponent,
    MPForumDetailsComponent,
    MPForumItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
