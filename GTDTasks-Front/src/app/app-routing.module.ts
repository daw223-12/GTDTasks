import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayPageComponent } from './pages/today-page/today-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { TicklerPageComponent } from './pages/tickler-page/tickler-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SimpleTaskPageComponent } from './pages/simple-task-page/simple-task-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'inbox', component: SimpleTaskPageComponent },
  { path: '', redirectTo: '/inbox', pathMatch: 'full' }, 
  { path: 'today', component: TodayPageComponent },
  { path: 'calendar', component: CalendarPageComponent },
  { path: 'actionable', component: SimpleTaskPageComponent },
  { path: 'hibernating', component: SimpleTaskPageComponent },
  { path: 'tickler', component: TicklerPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: LoginPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
