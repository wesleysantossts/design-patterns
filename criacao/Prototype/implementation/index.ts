class Prototype {
  primitive: any;
  component: object;
  circularReference: ComponentWithBackReference;

  clone(): this {
    const clone = Object.create(this); // Cria um protótipo da classe inteira no Typescript

    clone.component = Object.create(this.component); // cria um protótipo da propriedade inteira
    clone.circularReference = { // nesse campo pega a classe original e coloca em uma chave o prototipo dela
      ...this.circularReference,
      prototype: {...this},
    };

    return clone;
  }
}

export class ComponentWithBackReference {
  prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

export default Prototype;