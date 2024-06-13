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
  ticklers: Reminder[][] = [[], [], []];
  appointments: Reminder[] = [];


  constructor(private route: ActivatedRoute, private ticklerApi: TicklerService) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      this.ruta = segments.join('/');
    });
    this.ticklerApi.getTicklers().subscribe({next: res => {
      this.setTicklers(res);
    }});
  }

  setTicklers(data: Reminder[]){
    data.forEach(item => {
      this.ticklers[2].push(item)
    })
    this.setTodayElements(data);
    this.setNext30Days(data);
    console.log(this.ticklers);
    this.refreshTaskCards();
  }

  refreshTaskCards() {
    this.remindersCards.forEach(reminderCard => {
      reminderCard.fillReminder();
    });
  }

  private setTodayElements(data: Reminder[]): void {
    const today = new Date().toISOString().substring(0, 10); 
    this.ticklers[0].length = 0; // Clear the array
  
    data.forEach(item => {
      if (item.date === today) {
        this.ticklers[0].push(item);
      }
    });
  }

  private setNext30Days(data: Reminder[]): void {
  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 30);
  this.ticklers[1].length = 0; // Clear the array

  data.forEach(item => {
    const objectDate = new Date(item.date);
    if (objectDate >= today && objectDate <= endDate) {
      this.ticklers[1].push(item);
    }
  });
}

}
