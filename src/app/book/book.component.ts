import { Component, Input } from '@angular/core';
import { IBook } from '../interfaces/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cm-book',
  standalone: true,
  imports: [ 
    CommonModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  @Input() public book: IBook | null = null;

}

