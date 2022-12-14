class Api {
  constructor(apiConfig) {
    this._url = apiConfig.baseUrl;
    this._headers = apiConfig.headers;
  }
/* eslint-disable */
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
/* eslint-disable */

  setToken(token) {
    this._headers.Authorization = token;
  }

  register(email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  }

  // получение данных профиля с сервера
  getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // сохранение отредактированных данных профиля на сервере
  updateProfileInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    }).then(this._handleResponse);
  }

  // получение карточек с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // создание и загрузка новой карточки на сервер
  createCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._handleResponse);
  }

  // удаление карточки с сервера
  deleteCardById(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // переключение лайка
  changeLikeCardStatus(id, liked) {
    if (liked) {
      return this.addLike(id);
    }
    return this.deleteLike(id);
  }

  // проставление лайка
  addLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // удаление лайка
  deleteLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // изменение аватара
  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar: data }),
    }).then(this._handleResponse);
  }
}

export const api = new Api({
  // baseUrl: 'http://localhost:3000',
  baseUrl: '//api.mesto-pr15.aleksdsgn.nomoredomains.club',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});
