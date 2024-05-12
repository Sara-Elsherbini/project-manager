import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ForegtPasswordComponent } from './components/foregt-password/foregt-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { VerifyAccountComponent } from './components/verify-account/verify-account.component';

@NgModule({
  declarations: [
    AuthComponent,
    ForegtPasswordComponent,
    ResetPasswordComponent,
    LoginComponent,
    ChangePasswordComponent,
    RegisterComponent,
    VerifyAccountComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,SharedModule,HttpClientModule
  ],
  providers:[
    AuthService
  ],
})
export class AuthModule { }
