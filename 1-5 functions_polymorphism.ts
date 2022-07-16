// Polymorphism(다형성) & Generics
// 다양한 타입이 될 수 있는 콜 시그니쳐.
// 함수를 해당 콜시그니쳐로 지정하면 들어오는 인자값에 따라 타입이 달라짐.
// generic : 콜 시그니쳐를 작성할 때 들어오는 인자의 확실한 타입을 모를때 사용한다.
// 제네릭은 내가 요구한 대로 콜 시그니쳐를 만들어줌

type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
}; //<여기들어가는이름>은 아무거나 해도 상관없음. 얘가 Generic 이 됨. 실무에서 아래처럼 많이 쓴다.

type Printer = {
  <T, M>(a: T[], b: M): T;
}; // => 배열에 있는 거 보고 알아서 타입 유추하고 그 타입 중에 하나를 리턴해
// 두번째 인자를 Generic 으로 넣어줄 수도 있다.

const superPrint: SuperPrint = (arr) => arr[0];
const printer: Printer = (a) => a[0];

// 아래가 모두 가능하며, 각각의 콜시그니쳐를 확인 해보면 다 다르다.
// Generic 을 사용하면, 일일이 각각의 경우에 대한 콜시그니쳐를 작성하고 오버로딩 할 필요가 없다.
const a1 = superPrint([1, 2, 3, 4]);
const b1 = superPrint([true, false, true]);
const c1 = superPrint(['a', 'b', 'c']);
const d1 = superPrint([1, 2, true, false, 'hello']);

const e = printer([1, 2, true], 'X');

// Generic 은 아래와 같이 함수로도 사용할 수 있다.
function functionPrint<T>(a: T[]) {
  return a[0];
}

const f = functionPrint([1, 2, 'a', true]);

// 변수에 데이터를 저장할 때도 가능하다.
type Player1<E> = {
  name: string;
  extraInfo: E;
};

// 1
/* const nico: Player1<{ favFood: string }> = {
  name: 'nico',
  extraInfo: {
    favFood: 'Kimchi',
  },
}; */

// 2
// type NicoPlayer = Player1<{ favFood: string }>;
const nico: NicoPlayer = {
  name: 'nico',
  extraInfo: {
    favFood: 'Kimchi',
  },
};

// 3
type NicoExtra = {
  favFood: string;
};
type NicoPlayer = Player1<NicoExtra>;

// 4
const anna: Player1<null> = {
  name: 'anna',
  extraInfo: null,
};

// 리액트에서 제네릭 활용
// useState<number>();
// state의 타입을 number 로 할 꺼다.
// useState 함수의 콜시그니쳐에게 리턴값의 타입을 명시적으로 지정 해 줄 수 있다.
