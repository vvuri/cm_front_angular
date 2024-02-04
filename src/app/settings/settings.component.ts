import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cm-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSliderModule,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  sliderValue: number = 1;

  formatLabel(value: number): string {
    return `${value}`;
  }

  constructor(
    private bookService: BookService,
  ) { }

  public onGenerate(): void {
    // console.log(`Generate: ${this.sliderValue} books`);
    this.bookService.generateBooks(this.sliderValue).subscribe();
  }

  public onDeleteAll(): void {
    this.bookService.deleteAllBooks().subscribe();
  }
}
