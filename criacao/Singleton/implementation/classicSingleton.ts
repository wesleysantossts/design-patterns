interface User {
  name: string;
  age: number;
}

export class ClassicSingleton {
  private static instance?: ClassicSingleton;
  private users: User[] = [];

  private constructor() {}; // deixando o constructor como private, impede que o usuário instancie a classe fora dela

  static getInstance(): ClassicSingleton { // aqui faz com que o Singleton funcione, verifica se já tem uma instancia criada no arquivo, se tiver não cria outra, mas se não tiver ele pode criar
    if(!ClassicSingleton.instance) ClassicSingleton.instance = new ClassicSingleton();
    return ClassicSingleton.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
} 