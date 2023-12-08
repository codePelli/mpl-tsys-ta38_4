import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormComponent } from '../form/form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AppComponent, FormComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

@Input() users: Array<{ codigo: number; tarea: string; descripcion: string }> = [];
@Output() deleteArticle = new EventEmitter<number>();
@Output() selectArticle = new EventEmitter<{ index: number }>();

selFormGroup: FormGroup;

selectedRowIndex: number | undefined;

constructor(private fb: FormBuilder) {
  this.selFormGroup = this.fb.group({
    codigo: ['', Validators.required],
    tarea: ['', Validators.required],
    descripcion: ['', Validators.required],
  });
}

onDelete(index: number) {
  console.log(index);
  this.deleteArticle.emit(index);
}

onSelect(index: number) {
  throw new Error('Method not implemented.');
}

send(): void {
    if (this.selFormGroup.valid) {
      this.selectArticle.emit({ index: -1 });
      this.selFormGroup.reset();
    }
}

ngOnInit(): void {
  console.log(this.selFormGroup);
}

selectRow(index: number): void {
  this.selectedRowIndex = index;
}


}
