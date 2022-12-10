class Api {
  constructor(apiConfig) {
    this._url = apiConfig.baseUrl;
    this._headers = apiConfig.headers;
    this._token = apiConfig.token;
    this._content_type = 'application/json';
    this._fetch = (link, method = 'GET', body = undefined) => fetch(`${this._url}/${link}`, {
      /* eslint-disable */
      method: method,
      /* eslint-disable */
      headers: {
        authorization: `Bearer ${this._token}`,
        'content-type': this._content_type,
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
      })
      .then((result) => result);
  }

  // установка токена
  setToken(token) {
    this._token = token;
  }

  // получение данных профиля с сервера
  getProfileInfo() {
    return this._fetch('users/me');
  }

  // сохранение отредактированных данных профиля на сервере
  updateProfileInfo(name, about) {
    return this._fetch('users/me', 'PATCH', { name, about });
  }

  // получение карточек с сервера
  getInitialCards() {
    return this._fetch('cards')
  }

  // создание и загрузка новой карточки на сервер
  createCard(name, link) {
    return this._fetch('cards', 'POST', { name, link });
  }

  // удаление карточки с сервера
  deleteCardById(id) {
    return this._fetch('cards/${id}', 'DELETE');
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
    return fetch(`cards/${id}/likes`, 'PUT');
  }

  // удаление лайка
  deleteLike(id) {
    return fetch(`cards/${id}/likes`, 'DELETE');
  }

  // изменение аватара
  editAvatar(data) {
    return this._fetch('users/me/avatar', 'PATCH', { avatar: data });
  }
}

export const api = new Api({
  // baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-48',
  baseUrl: 'http://localhost:3000',
  // потом заменить на api.mesto-pr15.aleksdsgn.nomoredomains.club
  headers: {
    // 'Authorization': '',
    'Content-Type': 'application/json',
  },
  token: '',
});
