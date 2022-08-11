class Hamster {
    constructor(owner, name, price) {
        this.owner = owner;
        this.name = name;
        this.price = 15
    }
    wheelRun() {
       console.log("squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    getPrice() {
        this.price += money
        return this.price
    }
}


class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = hamsters;
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`Hey how are you ${this.name}?`)
    }
    eat() {
        this.weight += 1;
        this.mood += 1
    }
    exercise() {
        this.weight -= 1
    }
    ageUp() {
        this.age += 1;
        this.height += 1;
        this.weight += 1;
        this.bankAccount += 10
    }
    buyHamster(hamster) {
        this.mood += 10;
        this.bankAccount -= getPrice(15)
    }
}



