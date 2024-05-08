import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  myForm: FormGroup;
  @ViewChildren('inputs') inputs!: QueryList<ElementRef>;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      groupArray: new FormArray([])
    });
  }
  ngOnInit(): void {
    this.addMeal();
    this.addMeal();
  }

  get groupArrayControls() {
    return (this.myForm.get('groupArray') as FormArray).controls;
  }

  addMeal() {
    var inputsArray = (this.myForm.get('groupArray') as FormArray);
    console.log(inputsArray)
    const newGroup = new FormGroup({
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
      this.addMeal();
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
