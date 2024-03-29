# :camera_flash: Сервис Mesto (frontend + backend)
Проектная работа во время обучения на курсе веб-разработчика в Яндекс.Практикум.

## О проекте:
Сервис в котором можно поделиться своими фотографиями интересных мест и открыть для себя новые.

![mesto](https://user-images.githubusercontent.com/97102815/229083179-96529ecb-3d51-44a4-a0f0-85b78b3f6c98.gif)

Бэкенд и фронтенд расположены в соответсвующих директориях.

## Функционал:
### Фронтенд:
* Редактирование профиля (имя, о себе, аватар)
* Добавление карточек с фотографией и названием мест
* Возможность ставить/снимать лайки
* Возможность удалять только свои карточки мест
* Регистрация и авторизация
### Бэкенд (API):
* Регистрация и авторизация пользователя
* Получение данных авторизованного пользователя
* Запрос изменения авторизованного пользователя
* Получение данных пользователя по id
* Выдача и проверка jwt-токена
* Получение списка карточек мест
* Добавление новой карточки места
* Установка и снятие лайка на карточках
* Удаление карточек только авторизованного пользователя

## Стек:
* CSS (адаптивная верстка)
* JavaScript
* React (Create React App, JSX, компоненты, роутер, стейты, эффекты, контекст)
* Методология БЭМ Nested
* Mongoose
* MongoDB
* Node.js
* Express

## Ссылки:
- Frontend https://mesto-pr15.aleksdsgn.nomoredomains.club
- Backend https://api.mesto-pr15.aleksdsgn.nomoredomains.club
- Репезиторий Github https://github.com/aleksdsgn/react-mesto-api-full


---
## Установка и запуск
### Требования:
* Node.js >= 14;
* npm >= 6.14;

`git clone https://github.com/aleksdsgn/react-mesto-api-full.git` - клонирование репозитория

для обращения к API по локальной сети в файле react-mesto-api-full\frontend\src\utils\api.js

расскомментировать 111 строку `// baseUrl: 'http://localhost:3000',`

и закомментировать 112 строку `baseUrl: '//api.mesto-pr15.aleksdsgn.nomoredomains.club',`

Backend:
* `cd .\react-mesto-api-full\backend` - вход в каталог
* `npm i` - установка зависимостей
* `mongod` - запуск mongodDB
* `npm run dev` - запуск develop-сборки с hot-reload

Frontend:
* `cd .\frontend` - вход в каталог
* `npm i` - установка зависимостей
* `npm run start` - запуск develop-сборки с hot-reload
