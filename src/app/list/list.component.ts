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
export class ListComponent implements OnInit {
  @Input() users: Array<{ codigo: number; tarea: string; descripcion: string }> = [];
  @Output() deleteArticle = new EventEmitter<number>();
  @Output() selectArticle = new EventEmitter<number>();

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
    this.deleteArticle.emit(index);
  }

  onSelect(index: number) {
    this.selectArticle.emit(index);
    this.selectedRowIndex = index;
    document.getElementsByTagName('tr');
    document.getElementsByTagName('tr')[index].classList.add('selected-row');
    console.log(document.getElementsByTagName('tr')[index]);
  }

  send(): void {
    if (this.selFormGroup.valid) {
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
