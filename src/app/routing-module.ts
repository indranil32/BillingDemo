import { AuthService } from './_service/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})
export class RoutingModule {}
