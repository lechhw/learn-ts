// unknown : 어떤 타입인지 모를 때 사용한다.
let aa: unknown;

// let bb = aa + 1; => aa 가 unknown 이므로 에러 발생
if (typeof aa === 'number') {
  let bb = aa + 1;
} else if (typeof aa === 'string') {
  let bb = aa.toUpperCase();
}

// void : 아무것도 return 하지 않는 함수이다. 즉, void 는 '비어있는 것' 을 말한다
// 타입스크립트가 자동으로 인식하기 때문에 보통 void 를 따로 지정해 줄 필요 없다
function hello() {
  console.log('x');
}

const ab = hello();
ab.toUpperCase(); // hello() 함수는 void 형식이기때문에 (=비어있기 때문에) 에러 발생

// never : 함수가 절대 return 하지 않을 때 발생한다.
function hi(): never {
  // return 'X'; => 반환값 타입에 never 를 사용하면 return 시 에러발생
  throw new Error('xxx'); // 에러는 발생 시킬 수 있다.
}

// 또한 never 는 타입이 두가지 일 수 도 있는 상황에 발생할 수 있다.
function hi2(name: string | number) {
  if (typeof name === 'string') {
    name; // 여기의 name = string
  } else if (typeof name === 'number') {
    name; // 여기의 name = number
  } else {
    name; // 여기는 뭘 쓰든지 그 타입은 never => 이 코드는 절대 실행 되지 않아야 한다는 것
  }
}
