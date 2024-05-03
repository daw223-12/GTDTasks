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
    console.log("AKLSDJLKSADJKLSADJKL")
    var inputsArray = (this.myForm.get('groupArray') as FormArray);
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

  onBlurInput(index: number) {
    const inputValue: string = (this.myForm.get('groupArray') as FormArray).at(index).value.label;
    // this.inputsArray[index] = inputValue;
  }

}
