import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartComponent } from './shared/cart/cart.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { SearchPipe } from './search.pipe';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    MainContentComponent,
    SearchPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
