const user = {
  name: 'JINYURI',
  age: 22,
  emails: 'jin_astro0302@naver.com',
};

localStorage.setItem('user', JSON.stringify(user)); //local Storage에 데이터를 저장할 때는 문자 데이터로 변환해서 저장!
console.log(JSON.parse(localStorage.getItem('user'))); //자바 스크립트의 데이터로 변환하여 출력!
localStorage.removeItem('user'); //local Storage에서 데이터 삭제
