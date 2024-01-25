# CmFrontAngular

Front End course 

## Build
Run `ng build` -> `dist/`

## Steps

1. $ ng version  
   > Angular CLI: 17.0.10 <br>
   Node: 20.10.0 <br>
   Package Manager: npm 8.17.0 <br>
   OS: win32 x64

2. $ npm install

3. $ ng serve
   > http://localhost:4200/

4. https://material.angular.io/components/list/overview
    ```
    <mat-nav-list>
    @for (link of list; track link) {
        <a mat-list-item href="..." [activated]="link.isActive">{{ link }}</a>
    }
    </mat-nav-list>
    ```
5. CSS and grid from https://github.com/vvuri/cm_front_css/tree/main/src

6. Material specification: 
   > https://m3.material.io/

7. Add Material   
    > $ ng add @angular/material <br>
    version: @angular/material@17.0.5

8. VSCode ``` import { Ctrl + Space } from '@angular/material/button'  ```

9. Customize element
    - @use '../mixins/typography';
    - @include typography.display-small;

10. Use: https://github.com/vvuri/cm_front_css/tree/main

11. Font Symbol: https://fonts.google.com/icons

12. Create interface: 
    > $ ng g interface interfaces/book --prefix I <br>
    CREATE src/app/interfaces/book.ts 

13. Create service:
    > $ ng g service services/book <br>
    CREATE src/app/services/book.service.spec.ts <br>
    CREATE src/app/services/book.service.ts

14. $ ng g component books
    CREATE src/app/books/books.component.html (19 bytes)
    CREATE src/app/books/books.component.spec.ts (582 bytes)
    CREATE src/app/books/books.component.ts (226 bytes)
    CREATE src/app/books/books.component.scss (0 bytes)

15. Pipe
    > $ ng g pipe pipes/book

16. Add server: https://github.com/vordig/lection-server    

17. Swagger: http://127.0.0.1:5010/swagger/index.html

18. Add user - only ones:
    GET http://127.0.0.1:5010/api/auth/register
    { "name": "user", "email": "user@test.qa", "password": "1234" }

19. Login:
    POST http://127.0.0.1:5010/api/auth/login
    { "email": "user@test.qa", "password": "1234" }
    --> { "accessToken": "eyJhb..." }
    
20. Add Book: 
    GET http://127.0.0.1:5010/api/books
    Bearer Token: "eyJhb..."
    { "author": "Sting K", "name": "Little Sttory 2" }
    --> { "id": "5d6a3640 ... }

21. Get All Books:
    GET http://127.0.0.1:5010/api/books
    Bearer Token: "eyJhb..."
    --> [ { "id": "5d6..", "userId": "df...", "author": "Sting K", "name": "Little Sttory 2"}, ... ]


## ToDo
1. Dark тема
2. Переделать list книг - в название и автор
3. Доделать Navigation Drawer
4. Hover для меню
5. Resize для mobile
6. 
