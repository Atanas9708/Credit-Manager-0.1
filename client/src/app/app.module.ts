import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './services/services.module';
import { AppRoutesModule } from './app-routes.module';
import { AuthModule } from './components/auth/auth.module';
import { CreditModule } from './components/credits/credit.module';


import { AppComponent } from './app.component';
import { CreditListComponent } from './components/credits/credit-list/credit-list.component';

import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    FormsModule,
    ServiceModule,
    CreditModule,
    AuthModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
