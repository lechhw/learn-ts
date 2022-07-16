// interface (2)
// 인터페이스를 사용하면 클래스의 property 와 메소드를 특정해 줄 수 있음.

// * abstract class
// abstract class에서는 구현을 하지 않고 구현할 때 따라야 할 규칙을 정함
// abstract class 로는 인스턴스를 생성 할 수 없음 : new User5()❌
abstract class User5 {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string
  abstract fullName(): string
}

// 상속
class Player5 extends User5 {
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  sayHi(name) {
    return `Hello ${name} my name is ${this.fullName()}`
  }
}

// abstract class 의 목적은 다른 클래스가 표준화된 property 와 method 를 가지도록 규칙을 정해주는 것
// 그러나 자바스크립트로 변환되면 일반 class 로 변환됨.
// 따라서 abstract class 를 사용하는 목적이 사라지게 됨. => 이럴 때 인터페이스를 사용하면 됨

// * interface로 바꿔보자!

// Js 변환 시 사라짐
interface User6 {
  firstName: string
  lastName: string
  sayHi(name: string): string
  fullName(): string
}

// 클래스가 인터페이스를 상속 받으려면 implements 키워드를 사용함 : 이건 타입스크립트만 가능한 명령어
class Player6 implements User6 {
  constructor(
    //❗️인터페이스를 상속받으면 property 를 public 으로만 지정할 수 있음
    /* error
    private firstName: string,
    private lastName: string,
    */

    // correct
    public firstName: string,
    public lastName: string
  ) {}

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  sayHi(name) {
    return `Hello ${name} my name is ${this.fullName()}`
  }
}

// 여러개의 인터페이스를 동시에 상속 받을 수도 있음
interface Human {
  health: number
}

class Player7 implements User6, Human {
  // ...
}

// 인터페이스의 장점은 TS에서 JS로 변환될 때 abstract class는 그대로 class로 변환되지만 interface는 타입스크립트에서만 존재하고 자바스크립트에서는 아무런 코드가 나타나지 않음. 더 효율적.

// but, 인터페이스를 사용할 때의 단점
// property 를 public 으로만 지정 가능
// 추상클래스에서 constructor로 만들면 상속받은 클래스에서는 만들어줄 필요가 없는데 인터페이스는 상속받은 클래스에서 매번 지정해줘야함. 귀찮..

// ❗️인터페이스를 타입으로 지정해 줄 수도 있음.
