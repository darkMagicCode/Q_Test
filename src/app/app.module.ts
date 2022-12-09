import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './product/home/home.component';
import { HeaderComponent } from './product/header/header.component';
import { SingleItemComponent } from './product/single-item/single-item.component';
import { PdescPipe } from './pipe/pdesc.pipe';
import { IpagesPipe } from './pipe/ipages.pipe';
import { BgColorActiveDirective } from './pipe/bg-color-active.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SingleItemComponent,
    PdescPipe,
    IpagesPipe,
    BgColorActiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
