// Parent class: Animal
class Animal {
  private _species: string; // Private property to store species

  constructor(species: string) {
    this._species = species;
  }

  // Getter for species
  get species(): string {
    return this._species;
  }

  // Method to make a sound
  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Child class: Cat
class Cat extends Animal {
  constructor(species: string) {
    super(species);
  }

  // Method specific to Cat
  purr(): void {
    console.log("purr");
  }
}

// Child class: Dog
class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  // Method specific to Dog
  bark(): void {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;






