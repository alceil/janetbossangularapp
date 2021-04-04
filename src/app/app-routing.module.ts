import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReadauthorsComponent } from './readauthors/readauthors.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'authors/:id',component:ReadauthorsComponent},
  {path:'updatebooks/:id',component:UpdatebookComponent},
  {path:'updateauthors/:id',component:UpdateauthorComponent},
  {path:'books/:id',component:ReadmoreComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'addauthor',component:AddauthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
