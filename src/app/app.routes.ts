import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { authGuard } from './auth/guards/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddBookComponent } from './dialods/add-book/add-book.component';
import { StatisticComponent } from './statistic/statistic.component';

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
        path: "statistic",
        component: StatisticComponent,
        canActivate: [authGuard]
    },
    {
        path: "settings",
        component: SettingsComponent,
        canActivate: [authGuard]
    },
    {
        path: "",
        component: AppComponent,
        canActivate: [authGuard]
    },

];
