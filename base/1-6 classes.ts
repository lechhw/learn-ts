// 접근제한자(Access modifier) : 타입 스크립트에는 접근 제한자인 public, private, protected 를 지원하며, 이를 통해 외부에서 특정 메소드나 프로퍼티에 접근 범위를 지정할 수 있다.
// public : 어디에서나 접근 할 수 있으며 생략 가능한 default 값이다.
// private : 해당 클래스의 인스턴스에서만 접근 가능
// protected : 해당 클래스 혹은 서브클래스의 인스턴스에서만 접근 가능.
class NewPlayer {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {} // private, public 키워드는 타입스크립트 영역 내에서만 작동 되는 확인장치 같은거.
}
const lch = new NewPlayer('chang', 'hwan', 'hwany');

// error
lch.firstName;
lch.lastName;

// correct : public 으로 설정한 것만 클래스 외부에서 알 수 있음
lch.nickname;

// abstract class(추상 클래스) : 다른 클래스가 상속받을 수 있는 클래스. 직접 인스턴스를 생성 할 수 없음
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

class PlayerClass extends User {}

// error
const hwany = new User('changhwan', 'lee', 'hwan');

// correct
const hwany = new PlayerClass('changhwan', 'lee', 'hwan');

// abstract method ?
// abstract class에서 메소드함수를 생성하는 대신 콜시그니쳐를 작성한 것
// abstract method 를 abstract class 안에 만들어 두면
// 그 추상 클래스를 상속 받은 모든 클래스는 추상메소드로 지정해둔 함수를 무조건 구현해야한다.

abstract class User2 {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}

  // abstract method : 구현 할 메소드의 타입만 지정해줌.
  abstract getFullName(): string;
}

class PlayerClass2 extends User2 {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const hwany2 = new PlayerClass2('changhwan', 'lee', 'hwany');
