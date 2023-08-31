import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";
import accountRoutes from "./account.route";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(accountRoutes),
  ]
})

export class AccountModule { };