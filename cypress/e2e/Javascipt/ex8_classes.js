module.exports=class Person{ //module.exports is usee to export the class and make it public so that it is accessible anywhere
    constructor(age,name){ ////constructor is an object which get executed by default when the object of class is created
    
        this.age=age
        this.name=name
//he this keyword refers to an object.Which object depends on how this is being invoked (used or called).

//The this keyword refers to different objects depending on how it is used:
    }
    age=67
    name="saket"
    get urwashi(){           //getter methods are used to access the properties of an object.
        return "ankit"  
    }
}


let person=new Person(27,'tim')
console.log(person.age)
console.log(person.urwashi)
