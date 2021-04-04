import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { FooterComponent } from './footer/footer.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { ReadauthorsComponent } from './readauthors/readauthors.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
    SignupComponent,
    LoginComponent,
    AddbookComponent,
    AddauthorComponent,
    FooterComponent,
    ReadmoreComponent,
    UpdatebookComponent,
    ReadauthorsComponent,
    UpdateauthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
