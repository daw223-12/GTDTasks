import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withXsrfConfiguration,
} from '@angular/common/http';
import { RouterModule, provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';

// ANGULAR MATERIAL
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { CookieService } from 'ngx-cookie-service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskSimpleComponent } from './components/task-simple/task-simple.component';
import { TodayPageComponent } from './pages/today-page/today-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { TicklerPageComponent } from './pages/tickler-page/tickler-page.component';
import { CalendarComponent } from './components/calendar';
import { NavbarBottomComponent } from './components/navbar-bottom/navbar-bottom.component';
import { TaskHorizontalGrouperComponent } from './components/task-horizontal-grouper/task-horizontal-grouper.component';
import { ReminderTabsComponent } from './components/reminder-tabs/reminder-tabs.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ReminderGrouperComponent } from './components/reminder-grouper/reminder-grouper.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { SimpleTaskPageComponent } from './pages/simple-task-page/simple-task-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CalendarTabsComponent } from './components/calendar-tabs/calendar-tabs.component';
import { CalendarsComponent } from './components/calendars/calendars.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskCardComponent,
    TaskSimpleComponent,
    TodayPageComponent,
    CalendarPageComponent,
    TicklerPageComponent,
    NavbarBottomComponent,
    TaskHorizontalGrouperComponent,
    ReminderTabsComponent,
    RemindersComponent,
    ReminderGrouperComponent,
    LoginPageComponent,
    LoginComponentComponent,
    LoginRegisterComponent,
    SimpleTaskPageComponent,
    NotFoundPageComponent,
    CalendarTabsComponent,
    CalendarsComponent,
    LoginHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    CalendarComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
