import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayPageComponent } from './pages/today-page/today-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ActionablePageComponent } from './pages/actionable-page/actionable-page.component';
import { HibernatingPageComponent } from './pages/hibernating-page/hibernating-page.component';
import { TicklerPageComponent } from './pages/tickler-page/tickler-page.component';
import { InboxPageComponent } from './pages/inbox-page/inbox-page.component';

const routes: Routes = [
  { path: 'inbox', component: InboxPageComponent },
  { path: '', redirectTo: '/inbox', pathMatch: 'full' }, 
  { path: 'today', component: TodayPageComponent },
  { path: 'calendar', component: CalendarPageComponent },
  { path: 'actionable', component: ActionablePageComponent },
  { path: 'hibernating', component: HibernatingPageComponent },
  { path: 'tickler', component: TicklerPageComponent },
  { path: '**', component: InboxPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
