import _ from 'lodash';
import getType from './getType';

console.log('안녕, 나는 거북이야');
console.log(_.camelCase("Hi, I'm turtle"));
console.log(getType(123));

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
  console.log('안녕!');
}, 3000);

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  clearTimeout(timer);
});

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

function timeout() {
  sestTimeout(() => {
    console.log('안녕!거북이!');
    cb();
  }, 3000);
}
timeout(() => {
  console.log('끝!');
});

// 생성자 함수
function user(first, last) {
  this.firstname = first;
  this.lastName = last;
}
user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const yuri = new user('Yuri', 'Jin');
const sojeong = new user('Sojeong', 'Yoo');
const hayoung = new user('Hayoung', 'Kang');

console.log(yuri.getFullName());
console.log(sojeong.getFullName());
console.log(hayoung.getFullName());

// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!
function User(name) {
  this.name = name;
}
User.prototype.normal = function () {
  console.log(this.name);
};
User.prototype.arrow = () => {
  console.log(this.name);
};

const heropy = new User('Yuri');

heropy.normal();
heropy.arrow();

//ES6 Classes

// class User {
//     constructor(first, last){
//         this.firstName = first
//         this.lastName = last
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

//상속(확장)
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}
