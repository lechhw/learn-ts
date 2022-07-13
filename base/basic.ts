let count = 0; // 숫자
count += 1;
count = '갑자기 분위기 문자열'; // 에러 발생

const message: string = 'hello world'; // 문자열
const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

message.push(1); // 숫자 넣으려고 하면 ,, 에러 발생

// string  일 수도 있고 undefined 일 수도 있음.
let mightBeUndefined: string | undefined = undefined;

// number 일 수도 있고 null 일 수도 있음.
let nullableNumber: number | null = null;

// red, orange, yellow 중 하나임.
let color: 'red' | 'orange' | 'yellow' = 'red';

color = 'orange';
color = 'green'; // 에러 발생
