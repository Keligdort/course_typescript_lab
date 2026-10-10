/* 
	Добавьте в MathOperations статический метод square, который возвращает число в квадрате. Реализуйте абстрактный метод calculate в классе CircleArea, который возвращает площадь круга по формуле pi * r^2, используя статический метод square
*/

export abstract class MathOperations {
  static pi: number = 3.14159265359;
  
  static square(num: number): number {
    return num * num;
  }

  abstract calculate(): number;
}


export class CircleArea extends MathOperations {
  radius: number;
  
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculate(): number {
    return MathOperations.pi * MathOperations.square(this.radius);
  }
}
