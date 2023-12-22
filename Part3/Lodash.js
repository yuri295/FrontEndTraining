import _ from 'lodash';

const usersA = [
  { userId: '1', name: 'JINYURI' },
  { userId: '2', name: 'KUROMI' },
];
const usersB = [
  { userId: '1', name: 'JINYURI' },
  { userId: '3', name: 'POCHACCO' },
];
const usersC = usersA.concat(usersB); //데이터 합치는 메소드
console.log('concat', usersC);
console.log('uniqBy', _.uniqBy(usersC, 'userId')); //중복된 데이터를 고유화 처리하는 메소드

const usersD = _.unionBy(usersA, usersB, 'userId'); //중복된 데이터를 합치고 고유화 처리하는 메소드
console.log('unionBy', usersD);

const user = [
  { userId: '1', name: 'JINYURI' },
  { userId: '2', name: 'KUROMI' },
  { userId: '3', name: 'POCHACCO' },
  { userId: '4', name: 'MYMELODY' },
  { userId: '5', name: 'CINNAMOROLL' },
];

const foundUser = _.find(users, { name: 'KUROMI' });
const foundUserIndex = _.findIndex(users, { name: 'KUROMI' });
console.log(foundUser); //{ userId: '2', name: 'KUROMI' }
console.log(foundUserIndex); //1

_.remove(useers, { name: 'JINYURI' });
console.log(users);
