import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProductsComponent } from './products/products.component';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './modals/editbook/editbook.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotfoundComponent,
    ProductsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [EditComponent],
  entryComponents: [EditComponent]
})
export class AppModule { }
