import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AccessGuard } from "src/app/auth/auth.guard";

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AccessGuard]
    },
]

export default homeRoutes;