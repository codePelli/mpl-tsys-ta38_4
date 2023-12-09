import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

userList: Array<{ codigo: number; tarea: string, descripcion: string }> = [];
users: any;
selectRowIndex: number | undefined;

  onSaveUser(user: any) {
    this.userList.push(user);
  }

  onDeleteArticle(index: number): void {
    console.log('Deleting item at index:', index);
    this.userList.splice(index, 1);
    console.log(index);
    console.log(this.userList);
  }

  onSelectArticle(index: number): void {
    console.log(this.onSelectArticle, index);
    this.selectRowIndex = index;
  }

  ngOnInit(): void {}
}