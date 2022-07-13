// readonly 속성 => readonly 를 사용하면 immutability(불변성) 을 가진다.
type Age = number;
type Name = string;
type Player2 = {
  readonly name: Name;
  age?: Age;
};

const playerMaker2 = (name: string): Player2 => ({ name });

const hwan2 = playerMaker2('hwan');
hwan2.age = 29;

hwan2.name = hwany; // readonly 이기 때문에 수정시 에러발생

const numbers2: readonly number[] = [1, 2, 3, 4];
numbers2.push(1); // readonly 이기 때문에 수정시 에러발생. filter(), map()은 원본배열을 바꾸지 않으므로 사용가능

// Tuple:  array 를 생성하게 해주는데 최소한의 길이를 가져야하고 특정 위치에 특정 타입이 있어야 한다.
// 이걸 사용하면 항상 정해진 갯수의 요소를 가져야 하는  array를 지정할 수 있고, 원하는 순서에 맞는 타입을 지정 할 수 있다.
const array: [string, number, boolean] = ['hwan', 1, true];

array[0] = 1; // 해당 요소에는 string 형식이 와야하므로 에러 발생

// any : 비어 있는 값들을 쓰면 기본값이 any가 된다.
// any 는 타입스크립트로의 보호장치 로부터 빠져 나오고 싶을 때 쓰는 타입이다. 그러나 되도록이면 사용하지 않는 것이 좋다.
const a: any[] = [1, 2, 3, 4];
const b: any = true;
a + b; // 에러발생하지 않음!

const a2 = [1, 2, 3, 4];
const b3 = true;

a2 + b3; // 에러 발생
