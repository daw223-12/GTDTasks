import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Reminder } from 'src/app/models/reminder';
import { TicklerService } from 'src/app/services/tickler.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
})
export class RemindersComponent {
  myForm: FormGroup;
  actualRoute!: string;
  @Input() reminders!: Reminder[];
  @ViewChildren('inputs') inputs!: QueryList<ElementRef>;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ticklerService: TicklerService
  ) {
    this.myForm = new FormGroup({
      groupArray: new FormArray([]),
    });
    this.route.url.subscribe((segments) => {
      this.actualRoute = segments.join('/');
    });
  }

  get groupArrayControls() {
    return (this.myForm.get('groupArray') as FormArray).controls;
  }

  fillReminder() {
    console.log(this.reminders);
    if (this.reminders != null) {
      this.reminders.forEach((element) => {
        const newGroup = new FormGroup({
          date: new FormControl(element.date),
          label: new FormControl({ value: element.name, disabled: false }),
        });
        (this.myForm.get('groupArray') as FormArray).push(newGroup);
      });
    }
  }

  addReminder() {
    var inputsArray = this.myForm.get('groupArray') as FormArray;
    const newGroup = new FormGroup({
      date: new FormControl(new Date().toISOString().substring(0, 10)),
      label: new FormControl(''),
    });
    inputsArray.push(newGroup);

    if (this.actualRoute == 'tickler') {
      this.ticklerService
        .createNewTickler({
          name: '.',
          date: this.generateFormattedDate(new Date()),
        })
        .subscribe({
          next: (res) => {
            let newTask: Reminder = {
              id: res.id,
              name: '.',
              date: res.date,
            };
            this.reminders.push(newTask);
          },
        });
    }
    // Focus on the new input
    setTimeout(() => {
      this.inputs.toArray()[this.inputs.length - 1].nativeElement.focus();
    }, 15);
  }

  deleteReminder(index: number) {
    var inputsArray = this.myForm.get('groupArray') as FormArray;
    inputsArray.removeAt(index);
    if (this.actualRoute == 'tickler') {
      this.ticklerService.deleteTickler(this.reminders[index].id!).subscribe();
      if (index < this.reminders.length) this.reminders.splice(index, 1);
    }
  }

  enterKeyPressed(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addReminder();
    }
  }

  onInput(index: number) {
    const textarea = this.inputs.toArray()[index].nativeElement;
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  onBlurInput(index: number) {
    const inputValue: string = (this.myForm.get('groupArray') as FormArray).at(index).value.label;
    const dateCalue: string = (this.myForm.get('groupArray') as FormArray).at(index).value.date;
    // this.inputsArray[index] = inputValue;
    if (inputValue != '') {
      var inputsArray = this.myForm.get('groupArray') as FormArray;
      this.ticklerService.updateTickler({ name: inputValue, date: dateCalue }, this.reminders[index].id!).subscribe();
    } else {
      this.deleteReminder(index);
    }
  }

  generateFormattedDate(fecha: Date): string {
    const year = fecha.getFullYear();
    const month = ('0' + (fecha.getMonth() + 1)).slice(-2);
    const day = ('0' + fecha.getDate()).slice(-2);
    const hour = ('0' + fecha.getHours()).slice(-2);
    const minutes = ('0' + fecha.getMinutes()).slice(-2);
    const seconds = ('0' + fecha.getSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  }
}
