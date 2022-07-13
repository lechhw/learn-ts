// call signatures : 함수 위에 마우스를 올렸을 때 보게 되는 것을 말한다.
// 파라미터의 타입 과 함수의 리턴타입을 직접 설정 해 줄 수 있다.
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

// overloading : 함수가 서로 다른 여러개의 call signatures 를 가지고 있는 경우에 발생한다.
type Plus = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

// const plus: Plus = (a, b) => a + b; => b 는 number | string 일 수 있기 때문에 string 과 number는 더할 수 없다는 에러 발생

const plus: Plus = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};

// overloading : 실무에서 사용하게 되는 경우 예시
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// overloading : call signatures에 파라미터의 개수가 다를 경우
type Minus = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// c 는 욥션 파라미터이기 때문에 추가적으로 타입을 주야하고, 선택사항이라는 걸 알려주는 ? 를 추가해 줘야 한다.
const minus: Minus = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

minus(1, 2);
minus(1, 2, 3);
