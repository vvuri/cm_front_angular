import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { authGuard } from './auth/guards/auth.guard';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'books',
        component: BookListComponent,
        canActivate: [authGuard]
    },
    {
        path: "",
        component: AppComponent,
        canActivate: [authGuard]
    },
];
