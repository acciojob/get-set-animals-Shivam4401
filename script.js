//complete this code
class Animal {
	constructor(species){
		this.name = species;
	}

	get.name(){
	  return this.name;
	}

	makeSound(){
		return `The ${name} makes a sound `
	}
}

class Dog extends Animal {
	constructor(name){
		super(name);
	}
	

	bark(){
		return `woof`;
	}
}

class Cat extends Animal {
	constructor(name){
		super(name);
	}

	purr(){
		return `purr`;
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;






