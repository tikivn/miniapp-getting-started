import clone from 'lodash-es/clone';

export function enumerable(value: boolean) {
  return function (_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value; 
    console.log('@@ 5. set the enumerable of '+propertyKey+'to '+value);

  };
}

export class Greeter {
  private greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  @enumerable(false)
  greet() {
    console.log('@@ 18. log greet ', "Hello, ==" + clone(this.greeting))
    return "Hello, ==" + this.greeting;
  }
}
