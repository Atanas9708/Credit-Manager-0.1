import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreditListComponent } from './components/credits/credit-list/credit-list.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CreateComponent } from './components/credits/create/create.component';
import { DetailsComponent } from './components/credits/details/details.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/credits', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'credits', component: CreditListComponent },
  { path: 'credit/:id', canActivate: [AuthGuard], component: DetailsComponent },
  { path: 'create', canActivate: [AuthGuard], component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {  };