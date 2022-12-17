import jwt from 'jsonwebtoken';

const YOUR_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzljYjcxODBhMGNhYjQ0NTgzN2YzNTgiLCJpYXQiOjE2NzEyMTUyOTEsImV4cCI6MTY3MTgyMDA5MX0.q-Evld8CAYC-WvM3eaYxIGvxPQ7Gybqz4U1qmQA7i-Y'; // вставьте сюда JWT, который вернул публичный сервер
const SECRET_KEY_DEV = 'cprosto-sekret'; // вставьте сюда секретный ключ для разработки из кода

try {
  const payload = jwt.verify(YOUR_JWT, SECRET_KEY_DEV);

  console.log('\x1b[31m%s\x1b[0m', `
    Надо исправить. В продакшне используется тот же
    секретный ключ, что и в режиме разработки.
  `);
} catch (err) {
  if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Всё в порядке. Секретные ключи отличаются',
    );
  } else {
    console.log(
      '\x1b[33m%s\x1b[0m',
      'Что-то не так',
      err,
    );
  }
}
