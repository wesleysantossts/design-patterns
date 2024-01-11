import { ClassicSingleton } from '../implementation/classicSingleton';

const db1 = ClassicSingleton.getInstance();
const db2 = ClassicSingleton.getInstance();
db1.add({name: 'Wesley', age: 28});
db2.add({name: 'Maria', age: 26});

// aqui deve mostrar nos 2 os mesmos dados, porque no singleton impede que o usuário crie uma outra instancia na mesma aplicação
  //- independente de onde eu instancie, só terei 1 instancia com os dados que eu tiver passado pra ela. Exemplo: banco de dados, se eu instanciar com singleton, em qualquer lugar do código só poderá usar essa instancia.
db1.show();
db2.show();