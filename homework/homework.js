//class Hamster {
//    constructor(owner, name, price) {
//        this.owner = owner;
//        this.name = name;
//        this.price = 15
//    }
//    wheelRun() {
//       console.log("squeak squeak")
//    }
//    eatFood() {
//        console.log("nibble nibble")
//   }
//    getPrice() {
//        this.price += money
//        return this.price
//    }
//}


//class Person {
//    constructor(name, age, height, weight, mood, bankAccount) {
//        this.name = name;
//        this.age = age;
//        this.height = height;
//        this.weight = weight;
//        this.mood = mood;
//        this.hamsters = [];
//        this.bankAccount = bankAccount;
//    }
//    getName() {
//        return this.name
//    }
//    getAge() {
//        return this.age
//    }
//    getWeight() {
//        return this.weight
//    }
//    greet() {
//        console.log(`Hey how are you ${this.name}?`)
//    }
//    eat() {
//        this.weight += 1;
//        this.mood += 1
//    }
//    exercise() {
//        this.weight -= 1
//    }
//    ageUp() {
//        this.age += 1;
//        this.height += 1;
//        this.weight += 1;
//        this.bankAccount += 10
//    }
//    buyHamster(hamster) {
//        this.mood += 10;
//        this.bankAccount -= getPrice(15)
//    }
//}
//
//const myPerson = new Person("Timmy", 5, weight, height, mood, "Gus", 
//bankAccount)
//
//const response = myPerson.eat(5)
//console.log(response)



class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert
    }
    Cook () {
        console.log(`${this.type} says: ${this.appetizer}`)
    }
}

class ChefFactory {
    constructor(factoryType) {
        this.factoryType = factoryType;
        this.DinnerSelection = []
    }

makeNewDinner(appetizer, entree, dessert) {
    const newDinner = new Dinner(this.factoryType. appetizer, entree, dessert);
    this.DinnerSelection.push(newDinner);
}


printDinner() {
    for(let Dinner of this.DinnerSelection) {
        console.log(Dinner)
    }
}
}
let specialFactory = new ChefFactory('Special');

specialFactory.makeNewDinner('Mozarella Sticks', 'Spaghetti', 'Tiramisu')
specialFactory.makeNewDinner('Salsa n Chips', 'Tamales', 'Churros')
specialFactory.makeNewDinner('Onion Rings', 'Steak and Potatoes', 'Chocolate Cake')

specialFactory.printDinner()