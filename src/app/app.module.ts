import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes  } from '@angular/router';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginappComponent } from './loginapp/loginapp.component';

const routes: Routes = [
  { path: '', component: LoginappComponent },
  { path: 'home', component: HomeComponent },
 { path: 'add', component: AddProductComponent },
  { path: 'updateProduct/:id', component: UpdateProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    UpdateProductComponent,
    LoginappComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
