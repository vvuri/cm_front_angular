# CmFrontAngular
Front End course 

## Run
1. Run Docker container
2. Change port in environment.development.ts: 'http://localhost:5010/api/' 
3. $ ng serve
4. Browser open url: http://localhost:4200/

## Замечания
1. Port Docker 5010
2. App: http://localhost:4200/


### Steps

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

15. $ ng g component book-list
    CREATE src/app/book-list/book-list.component.html (24 bytes)
    CREATE src/app/book-list/book-list.component.spec.ts (611 bytes)
    CREATE src/app/book-list/book-list.component.ts (245 bytes)
    CREATE src/app/book-list/book-list.component.scss (0 bytes)

16. Pipe
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

    Registrar:
    POST http://127.0.0.1:5010/api/auth/register
    {
    "name": "string",
    "email": "string",
    "password": "string"
    }
    --> 200
    
20. Add Book: 
    GET http://127.0.0.1:5010/api/books
    Bearer Token: "eyJhb..."
    { "author": "Sting K", "name": "Little Sttory 2" }
    --> { "id": "5d6a3640 ... }

21. Get All Books:
    GET http://127.0.0.1:5010/api/books
    Bearer Token: "eyJhb..."
    --> [ { "id": "5d6..", "userId": "df...", "author": "Sting K", "name": "Little Sttory 2"}, ... ]

22. Add Book dialog
    $ ng g component dialods/add-book
    модификация добавления книг

23. Auth:
    $ ng g service auth/auth
    Add Login and Logout button and method in service

24. Добавляем защиту от показа страниц для неавторизованных пользователей
    $ ng g guard auth/guards/auth     
    - CanActivate

25. Добавляем авторизацию
    $ ng g component auth/login

26. Добавляем авторизацию
    $ ng g component auth/register

27. $ ng g component statistic    

28. Add connect to Server
    let headers = new HttpHeaders({['Content-Type']: 'application/json'});
    return this.httpClient.post(environment.apiUrl + 'auth/register', JSON.stringify(newUser), {headers: headers});
    --> return Observable<any>

29. Add Environment
    $ ng g environments
    --> apiUrl: 'https://localhost:5010/api/'

30. Внедрение token
    $ ng g interceptor interceptors/jwt

31. Edit book
    $ ng g component dialods/edit-book

## ToDo
1. Dark тема - Setting переключатель
2. Доделать Navigation Drawer
3. Hover для меню
4. Resize для mobile
5. Стилизация
6. Добавить валидацию #11 1:03
7. Не работае отоброжение ошибки при пустом логине
    

