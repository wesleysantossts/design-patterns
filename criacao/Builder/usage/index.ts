import { ConcreteBuilder, Director } from '../implementation';

// Essa função é a feita na parte do "código que usa" (código cliente)
function clientCode(director: Director) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log('Produto básico padrão: ');
  director.buildMinimalViableProduct();
  builder.getProduct()?.listParts();

  console.log('Produto padrão completo: ');
  director.buildFullFeaturedProduct();
  builder.getProduct()?.listParts();

  // Lembre-se, o padrão Builder pode ser usado sem uma classe Director.
  console.log('Produto personalizado: ');
  builder.productPartA();
  builder.productPartC();
  builder.getProduct()?.listParts();
}

const director = new Director();
clientCode(director);