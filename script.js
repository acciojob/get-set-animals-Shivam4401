//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}

	get.species(){
	  return this._species;
	}

	makeSound(){
		return `The ${this._species} makes a sound. `
	}
}

class Dog extends Animal {
	constructor(species = "Golden Retriever"){
		super(species);
	}
	

	bark(){
		return `woof`;
	}
}

class Cat extends Animal {
	constructor(species = "Siamese"){
		super(species);
	}

	purr(){
		return `purr`;
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;






