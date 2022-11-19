
# To-do лист
### API for the test project fof WomenUp

#### Проект включает:
* регистрацию и авторизацию пользователей, 

* реализованную валидацию,

* CRUD - функционал для задач (todo)
##### функционал поддерживает маршруты:

`/signin` - создаёт пользователя;

`/signup` - возвращает JWT, если в теле запроса переданы правильные почта и пароль

`/users/me` - возвращает текущего активного пользователя: 

`GET  - возвращает данные пользователя` 

`PATCH  - предоставляет доступ обновить имя и email`

`/todos`: 

`GET  - возвращает todo добавленные пользователем`

`GET  - возвращает todo с конретным номером добавленную пользователем`

`POST  - создает  todo` 

`DELETE - удаляет todo`

## Технологии

![Node.js](https://img.shields.io/badge/-Node.js-000?&logo=Node.js)
![Express.js](https://img.shields.io/badge/-Express.js-000?&logo=Express)
![MongoDB](https://img.shields.io/badge/-MongoDB-000?&logo=mongodb)
![Mongoose](https://img.shields.io/badge/-Mongoose-000?&logo=Mongoose)
![Eslint](https://img.shields.io/badge/-Eslint-000?&logo=Eslint)
![Joi](https://img.shields.io/badge/-Joi-000?&logo=Joi)
![Helmet](https://img.shields.io/badge/-Helmet-000?&logo=Helmet)
![Limitter](https://img.shields.io/badge/-Limitter-000?&logo=Limitter)


