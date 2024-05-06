import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';

// ANGULAR MATERIAL
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';




// Components
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFatherComponent } from './components/task-father/task-father.component';
import { TaskSimpleComponent } from './components/task-simple/task-simple.component';
import { InboxPageComponent } from './pages/inbox-page/inbox-page.component';
import { TodayPageComponent } from './pages/today-page/today-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { ActionablePageComponent } from './pages/actionable-page/actionable-page.component';
import { HibernatingPageComponent } from './pages/hibernating-page/hibernating-page.component';
import { TicklerPageComponent } from './pages/tickler-page/tickler-page.component';
import { CalendarComponent } from './components/calendar';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    TaskCardComponent,
    TaskFatherComponent,
    TaskSimpleComponent,
    InboxPageComponent,
    TodayPageComponent,
    CalendarPageComponent,
    ActionablePageComponent,
    HibernatingPageComponent,
    TicklerPageComponent
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
          deps: [HttpClient]
      }
  }),
    MatExpansionModule,
    MatInputModule, 
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
