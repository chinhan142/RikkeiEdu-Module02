class Shape {
  calculateArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  override calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  override calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea());

const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea());
