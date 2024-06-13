import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SimpleTask } from 'src/app/models/simple-task';
import { TaskResponse } from 'src/app/models/task-response';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-simple',
  templateUrl: './task-simple.component.html',
  styleUrls: ['./task-simple.component.scss']
})
export class TaskSimpleComponent {
  myForm: FormGroup;
  ruta!: string
  @Input() tasks!: SimpleTask[];
  @ViewChildren('inputs') inputs!: QueryList<ElementRef>;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private taskApi: TasksService) {
    this.myForm = new FormGroup({
      groupArray: new FormArray([])
    });

    this.route.url.subscribe((segments) => {
      this.ruta = segments.join('/');
    });
    console.log(this.ruta);
  }

  get groupArrayControls() {
    return (this.myForm.get('groupArray') as FormArray).controls;
  }

  fillTasks() {
    
    if (this.tasks != null)
      {
        this.tasks.forEach(element => {
          const newGroup = new FormGroup({
            label: new FormControl({value: element.name, disabled: false})
          });
          (this.myForm.get('groupArray') as FormArray).push(newGroup);
        });
      }
  }

  addMeal() {
    var inputsArray = (this.myForm.get('groupArray') as FormArray);
    console.log(inputsArray)
    const newGroup = new FormGroup({
      label: new FormControl('')
    });
    inputsArray.push(newGroup);
    this.taskApi.createNewTask({name: ".", type: this.ruta}).subscribe({
      next: res => {
        let newTask: SimpleTask = {
          id: res.id,
          name: '.',
          type: this.ruta
        }
        this.tasks.push(newTask)
      }
    })
    // Focus on the new input
    setTimeout(() => {
      this.inputs.toArray()[this.inputs.length-1].nativeElement.focus();
    }, 15)
  }

  deleteTask(index: number) {
    var inputsArray = (this.myForm.get('groupArray') as FormArray);
    inputsArray.removeAt(index);
    this.taskApi.deleteTask(this.tasks[index].id!).subscribe();
    if (index < this.tasks.length) this.tasks.splice(index, 1)
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
    if (inputValue != ""){
      var inputsArray = (this.myForm.get('groupArray') as FormArray);
      this.taskApi.updateTask({name: inputValue},this.tasks[index].id!).subscribe();
    } else {
      this.deleteTask(index)
    }
  }

}
