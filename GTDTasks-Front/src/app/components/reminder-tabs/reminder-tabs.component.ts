import { Component, QueryList, ViewChildren } from '@angular/core';
import { RemindersComponent } from '../reminders/reminders.component';
import { Reminder } from 'src/app/models/reminder';
import { ActivatedRoute } from '@angular/router';
import { TicklerService } from 'src/app/services/tickler.service';

@Component({
  selector: 'app-reminder-tabs',
  templateUrl: './reminder-tabs.component.html',
  styleUrls: ['./reminder-tabs.component.scss']
})
export class ReminderTabsComponent {
  @ViewChildren(RemindersComponent) remindersCards!: QueryList<RemindersComponent>

  ruta!: string;
  ticklers: Reminder[] = [];
  appointments: Reminder[] = [];


  constructor(private route: ActivatedRoute, private ticklerApi: TicklerService) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      this.ruta = segments.join('/');
    });
    this.ticklerApi.getTicklers().subscribe({next: res => {
      console.log(res);
      this.setTicklers(res);
    }});
  }
  

  setTicklers(data: Reminder[]){
    data.forEach(item => {
      this.ticklers.push(item)
    })
    this.refreshTaskCards();

  }

  refreshTaskCards() {
    this.remindersCards.forEach(reminderCard => {
      reminderCard.fillReminder();
    });
  }
}
