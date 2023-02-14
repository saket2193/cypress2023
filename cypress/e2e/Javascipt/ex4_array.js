//Array is a colloection of elements
let marks=[56,78,32,12,78]
console.log(typeof(marks))

new_marks= marks.slice(1,3)  //crerating new array by slicing an array
console.log(new_marks)
const cars = new Array("Saab", "Volvo", "BMW"); //another way
console.log(cars[1]) //accessing elements using index

cars[2]="hyundai"  //updating array element
console.log(cars[2])

console.log(cars.length) //to get array length

cars.push("marutii") //adds new element at end of array
console.log(cars)

cars.pop()         //removes the last element of array
console.log(cars)

cars.unshift("Hammer")    //adds new element at the starting of array
console.log(cars)

console.log(cars.indexOf("hyundai")) // to get the index position of any element in array

console.log(cars.includes("Saab")) //to check whether an element is present in array or not

//printing elements of array using for loop
for(let e=0;e<cars.length;e++){
    console.log(cars[e])
}

//sum of all element of aaray using for loop
var sum=0
for(let c=0;c<marks.length;c++){
    
   sum=sum + marks[c]
   
}console.log(sum)

//sum of all element of aaray using reduce
let total_marks=marks.reduce((total,mark)=>total+mark,0)
//The reduce() method executes a reducer function on each element of the array and returns a single output value.
console.log(total_marks)

//print only even element of array using filter
let ele=marks.filter((even)=>even%2==0)
//The filter() method returns a new array with all elements that pass the test defined by the given function.
console.log(ele)

//printing even element and inserting them in new array using for loop 
evenarr=[]
for(let p=0;p<marks.length;p++){ 
    if(marks[p]%2==0){
        evenarr.push(marks[p])
       
    }} console.log(evenarr)

let newarr= ele.map((scores)=>scores*3)
//map() creates a new array from calling a function for every array element.
//map() calls a function once for each element in an array.
//map() does not execute the function for empty elements.map() does not change the original array.
console.log(newarr)

//sort an array
cars.sort()
console.log(cars)
//sort method only works with string.it does not work with numbers

//sort using another way
let numbers = [110, 15 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});console.log(numbers);

//reverse array
cars.reverse()
console.log(cars)

//reverse array another way
let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// using spread operator to reverse the array
let reversedArray = [...languages].reverse();

console.log("Reversed Array:", reversedArray);

// modifies the original array
console.log("Original Array:", languages);