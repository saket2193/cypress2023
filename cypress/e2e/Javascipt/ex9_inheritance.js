//Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.
//Using class inheritance, a class can inherit all the methods and properties of another class.
//Inheritance is a useful feature that allows code reusability.
//To use class inheritance, you use the extends keyword.

// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet();


//The super keyword used inside a child class denotes its parent class. 
// parent class
class Person1 { 
    constructor(name1) {
        this.name1 = name1;
    }

    greet1() {
        console.log(`Hello ${this.name1}`);
    }
}

// inheriting parent class
class Student1 extends Person1 {

    constructor(name1) {
    
        console.log("Creating student class");
        
        // call the super class constructor and pass in the name parameter
        super(name1);
    }

}

let student2 = new Student1('Jack');
student2.greet1();