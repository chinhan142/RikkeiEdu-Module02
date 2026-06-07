class Shape {
    calculateArea() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea());
const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea());
