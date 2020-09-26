# GraphQL-test

## О проекте
Проект представляет собой страницу с подключенным GraphQL API, с использованием локального сервера. На главной странице проекта загружаются и отрисовываются карточки.

### Инструкция по развертыванию

* Клонировать репозиторий `git@github.com:lexankh/graphql-test.git`
* Открыть папку server `cd server`
* Установить зависимости `npm install`
* Запустить локальный сервер `npm run dev`
* Открыть index.html

### Инструкция пользователя

После запуска локального сервера и открытия index.html, необходимо пройти авторизацию (test:test). После входа вас перенаправит на страницу с карточками – можно наслаждаться!

### Инструкция по работе с сервером

Для добавления новой карточки(сохраняется на время, пока сервер запущен) необходимо перейти на `localhost:4000/graphiql` и ввести команду вида:
```
mutation($id : ID, $title: String, $subtitle: String, $image: String) {
  addList(id: $id, title: $title, subtitle: $subtitle, image: $image) {
    title
  }
}
```
В блоке variables ввести необходимые переменные, например:
```
{
id: 1,
title: "Github",
subtitle: "Github is cool!",
image: "image-link.jpg"
}
```

### Планы по доработке

* Подключить удаленный сервер
* Добавить возможность добавлять, изменять и удалять карточки с клиентской части