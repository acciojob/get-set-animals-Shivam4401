//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}

	get species(){
	  return this._species;
	}

	makeSound(){
		console.log (`The ${this._species} makes a sound `);
	}
}

class Dog extends Animal {
	constructor(species = "Golden Retriever"){
		super(species);
	}
	

	bark(){
		makeSound();
	}
}

class Cat extends Animal {
	constructor(species = "Siamese"){
		super(species);
	}

	purr(){
		makeSound();
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;






