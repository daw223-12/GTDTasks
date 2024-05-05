import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-simple',
  templateUrl: './task-simple.component.html',
  styleUrls: ['./task-simple.component.scss']
})
export class TaskSimpleComponent {
  myForm: FormGroup;
  @ViewChildren('inputs') inputs!: QueryList<ElementRef>;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      groupArray: new FormArray([])
    });
  }

  get groupArrayControls() {
    return (this.myForm.get('groupArray') as FormArray).controls;
  }

  addMeal() {
    var inputsArray = (this.myForm.get('groupArray') as FormArray);
    for (let element in inputsArray) {
      console.log(element)
    }
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
