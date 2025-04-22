// =======================
// 🧱 1. Abstraction
// =======================
// 📌 Definition:
// Abstraction means hiding the complex implementation details and showing only the necessary features of an object.

class Car {
    constructor() {
      this.fuel = 100;
    }
  
    startCar() {
      this.#igniteEngine();
      console.log("Car Started");
    }
  
    // Private method (abstracted from outside)
    #igniteEngine() {
      console.log("Engine Ignition with Fuel Level:", this.fuel);
    }
  }
  
  const myCar = new Car();
  myCar.startCar();
  // myCar.#igniteEngine(); // ❌ Error
  
  
  // =======================
  // 🔐 2. Encapsulation
  // =======================
  // 📌 Definition:
  // Encapsulation means binding the data (variables) and the code (methods) together into a single unit (class), and restricting access to some of the object's components.
  
  class BankAccount {
    #balance = 0; // Private field
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const myAccount = new BankAccount();
  myAccount.deposit(500);
  console.log("Balance:", myAccount.getBalance());
  // console.log(myAccount.#balance); // ❌ Error
  
  
  // =======================
  // 🧬 3. Inheritance
  // =======================
  // 📌 Definition:
  // Inheritance is a mechanism where a new class (child) inherits the properties and behavior (methods) of another class (parent).
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} says Woof!`);
    }
  }
  
  const dog = new Dog("Buddy");
  dog.speak();
  
  
  // =======================
  // 🔁 4. Polymorphism
  // =======================
  // 📌 Definition:
  // Polymorphism allows different classes to define the same method in different ways. It means "many forms".
  
  class Cat extends Animal {
    speak() {
      console.log("Cat says Meow");
    }
  }
  
  class Cow extends Animal {
    speak() {
      console.log("Cow says Moo");
    }
  }
  
  function makeAnimalSpeak(animal) {
    animal.speak();
  }
  
  const cat = new Cat("Kitty");
  const cow = new Cow("Bessie");
  
  makeAnimalSpeak(cat); // Cat says Meow
  makeAnimalSpeak(cow); // Cow says Moo
  
  
  // =======================
  // 💼 Real-World OOP Project: Employee Management System
  // =======================
  
  // Abstract class to hide internal logic
  class Logger {
    static #logToConsole(message) {
      console.log("[LOG]", message);
    }
  
    static log(message) {
      this.#logToConsole(message);
    }
  }
  
  // Encapsulation: Employee data is private
  class Employee {
    #salary;
  
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.#salary = salary;
    }
  
    getDetails() {
      return `${this.name} - ${this.position}`;
    }
  
    getSalary() {
      return this.#salary;
    }
  }
  
  // Inheritance: Manager is a type of Employee
  class Manager extends Employee {
    constructor(name, department, salary) {
      super(name, "Manager", salary);
      this.department = department;
    }
  
    // Polymorphism: Overriding getDetails
    getDetails() {
      return `${super.getDetails()} - Department: ${this.department}`;
    }
  }
  
  class Developer extends Employee {
    constructor(name, techStack, salary) {
      super(name, "Developer", salary);
      this.techStack = techStack;
    }
  
    getDetails() {
      return `${super.getDetails()} - Tech Stack: ${this.techStack.join(", ")}`;
    }
  }
  
  // Usage
  const dev = new Developer("Arslan", ["JavaScript", "React", "Node"], 75000);
  const mgr = new Manager("Hassan", "Engineering", 90000);
  
  Logger.log(dev.getDetails());
  Logger.log(mgr.getDetails());
  Logger.log(`Dev Salary: $${dev.getSalary()}`);
  Logger.log(`Manager Salary: $${mgr.getSalary()}`);
  