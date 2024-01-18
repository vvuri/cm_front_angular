import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'

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

export class AppComponent {
  title = 'cm_front_angular';

  public list: string[] = ['home', 'info', 'add', 'el1', 'el2', 'el3'];
  public activeLink: string = 'home';
}
