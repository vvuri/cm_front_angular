import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { authGuard } from './auth/guards/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
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
