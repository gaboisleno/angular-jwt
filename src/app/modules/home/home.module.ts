import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import homeRoutes from "./home.route";
import { CommonModule } from "@angular/common";
import { SharedComponentsModule } from "src/app/shared/navbar/shared.module";

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      CommonModule,
      SharedComponentsModule,
      RouterModule.forChild(homeRoutes),
    ]
  })
  
  export class HomeModule { };