import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { BookService } from './services/book.service';
import { IBook } from './interfaces/book';

interface INavigatinItem {
  id: string,
  label: string,
  icon: string
}

@Component({
  selector: 'cm-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'cm_front_angular';

  public books: IBook[] = [];

  constructor(
    private bookService: BookService
  ) { }

  public ngOnInit(): void {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }

  public addBook(): void {
    this.bookService.addBook().subscribe(() => { });
  }

  public navList: INavigatinItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: 'home'
    },
    {
      id: 'listbooks',
      label: 'Books list',
      icon: 'demography'
    },
    {
      id: 'add',
      label: 'Add Book',
      icon: 'library_add'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings'
    },
    {
      id: 'logout',
      label: 'Sign Out',
      icon: 'logout'
    },
  ];
  public activeLink: string = 'home';
}
