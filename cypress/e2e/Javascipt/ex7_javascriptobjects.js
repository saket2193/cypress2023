//object is a collection of propoerties

let person={

    firstname:"John",

    lastname:"Ruby"
}
console.log(person.firstname)
console.log(person["lastname"])

person.firstname="tim" //changing value
console.log(person.firstname)

person.gender="male" //adding new property
console.log(person)

delete person.gender //deleting a property
console.log(person)

console.log('gender' in person) //to check if property exists

//printing value  of all properites
for(let key in person){
    console.log(person[key])
}