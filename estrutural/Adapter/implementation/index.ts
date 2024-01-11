export class Target {
  request(): string {
    return `Target: the default target's behavior.`;
  }
}

export class Adaptee {
  specificRequest(): string {
    return `.eetpadA eht fo roivaheb laicepS`;
  }
}

export class Adapter extends Target {
  private adaptee: Adaptee;

  constructor (adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}
