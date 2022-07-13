// optional 타입
const playerHwan: {
  name: string;
  age?: number; // ? 를 추가해주면 optional 타입으로 만들 수 있다.
} = { name: 'hwan' };

// if (player.age < 10)   =>  player.age 가 undefined 이기 때문에 에러 발생

if (playerHwan.age && playerHwan.age < 10) {
}

const playerLynn: {
  name: string;
  age?: number;
} = {
  name: 'Lynn',
};

// -------------------------------------------------

// 위의 코드는 아래와 같이 refactoring 할 수 있다.
// Alias(별칭) 타입
type Player = { name: string; age?: number };

const hwan: Player = { name: 'Hwan' };
const lynn: Player = { name: 'Lynn' };

// return 하는 값의 타입 정하기
function playerMaker(name: string): Player {
  return {
    name,
  };
}

const changhwan = playerMaker('hwan');
changhwan.age = 29;

// return 하는 값의 타입 정하기 : 화살표 함수에서 사용법
const playerMakerArrow = (name: string): Player => ({ name });
