// interface (1)
// 인터페이스는 타입이랑 비슷하게 사용할 수 있는데, 다른 건 할 수 없고 객체의 형태를 지정해 주는 용도로만 쓸 수 있다.

type Team = 'red' | 'blue' | 'yellow';
// 이런식으로 type을 사용하면 string이라는 concrete 타입만 지정해줄 수 있는게 아니라
// 세부적으로 항목을 지정해 줄 수 있음.
// Team이라는 타입은 'red', 'blue', 'yellow'라는 스트링 중 하나만 가능함

interface PlayerTeam {
  name: string;
  age: number;
  team: Team;
}

// 인터페이스를 사용하는 것이 기존의 객체지향 문법과 비슷해서 사용하기 더 편하다고 함
// 유의 할 점은 인터페이스를 사용하면 객체 내부의 인자는 모두 public 이 된다.
// 인터페이스는 타입에 비해 조금 더 class의 느낌이 많이 남
// 타입의 장점은 더 다양한 형태로 사용되어 질 수 있음. 객체의 형태를 명시해 주기 위한 인터페이스와 달리 타입은 더 다양한 방식으로 사용 가능함.
// 추천: 객체의 형태를 정해 줄 때는 인터페이스 사용. 다른 경우에는 타입 사용.

// * 인터페이스 방식
interface User3 {
  name: string;
}

interface Player3 extends User3 {}

// 인터페이스에서는 property 의 축적이 가능하다.
interface User3 {
  age: number;
}

interface User3 {
  bool: boolean;
}

// => User3 의 프로퍼티를 세번에 걸쳐 정의해줘도 ok
const bread: Player3 = {
  name: 'bread',
  age: 29,
  bool: true,
};

// * 타입 방식
type User4 = {
  name: string;
};

type Player4 = User4 & {};

const ann: Player4 = {
  name: 'ann',
};

// 타입에서는 인터페이스처럼 여러번에 걸쳐서 프로퍼티를 정의 해주는 것이 불가능하다.

/* error ! 위의 type User4에 추가해줘야함

type User4 {
  age: number
}
 */
