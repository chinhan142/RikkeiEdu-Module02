class Animal {
  name: string;

  makeSound() {
    console.log("Make sound");
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }
}
