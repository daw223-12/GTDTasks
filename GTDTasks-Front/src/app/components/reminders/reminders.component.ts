import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Reminder } from 'src/app/models/reminder';
import { TicklerService } from 'src/app/services/tickler.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  myForm: FormGroup;
  @Input() reminders!: Reminder[];
  @ViewChildren('inputs') inputs!: QueryList<ElementRef>;

  constructor(private formBuilder: FormBuilder, private ticklerService: TicklerService) {
    this.myForm = new FormGroup({
      groupArray: new FormArray([])
    });
    //ticklerService.createNewTickler({name : "ultraguay", date : "2024-06-14 15:30:00"}).subscribe();
    //ticklerService.getTicklers().subscribe({next: res => {console.log(res);}})
  }
  ngOnInit(): void {
    this.addReminder();
    this.addReminder();
  }

  get groupArrayControls() {
    return (this.myForm.get('groupArray') as FormArray).controls;
  }

  fillReminder() {
    console.log(this.reminders);
    if (this.reminders != null)
      {
        this.reminders.forEach(element => {
          const newGroup = new FormGroup({
            date: new FormControl(element.date),
            label: new FormControl({value: element.name, disabled: false})
          });
          (this.myForm.get('groupArray') as FormArray).push(newGroup);
        });
      }
  }

  addReminder() {
    var inputsArray = (this.myForm.get('groupArray') as FormArray);
    const newGroup = new FormGroup({
      date: new FormControl(),
      label: new FormControl('')
    });
    inputsArray.push(newGroup);
    // Focus on the new input
    setTimeout(() => {
      this.inputs.toArray()[this.inputs.length-1].nativeElement.focus();
    }, 15)
  }

  removeMeal(index: number) {
    var inputsArray = (this.myForm.get('groupArray') as FormArray);
    inputsArray.removeAt(index);
  }

  enterKeyPressed(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addReminder();
    }
  }

  onInput(index: number) {
    const textarea = this.inputs.toArray()[index].nativeElement
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  onBlurInput(index: number) {
    const inputValue: string = (this.myForm.get('groupArray') as FormArray).at(index).value.label;
    // this.inputsArray[index] = inputValue;
  }
}
