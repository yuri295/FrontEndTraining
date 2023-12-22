const user = {
  name: 'JINYURI',
  age: 22,
  emails: 'jin_astro0302@naver.com',
};

localStorage.setItem('user', JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('user')));
