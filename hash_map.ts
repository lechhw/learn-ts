type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  // type을 concrete type(string,number,boolean...)이나 generic type 대신에 class 로 지정해 줄 수 도 있다.
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('Kimchi', '한국의 음식');

const dict = new Dict();

dict.add(kimchi);

dict.def('kimchi');
