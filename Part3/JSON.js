// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법

import myData from './myData.json';

console.log(myData);

const user = {
  name: 'JINYURI',
  age: 22,
  emails: 'jin_astro0302@naver.com',
};
console.log('user', user);

const str = JSON.stringify(user); //문자 데이터화
console.log('str', str);
console.log(typeof str);

const obj = JSON.parse(str); //자바 스크립트 데이터로 변경
console.log('obj', obj);
