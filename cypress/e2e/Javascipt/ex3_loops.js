// if else

const flag=true

if(flag){
    console.log("success")
}
else{

    console.log('failure')
}

//while

let i=1
while(i>=10){

    i++
    console.log(i)
}

//do while
let p=1
do{
    p++

}while(p<5){
console.log(p)
}
//for loop
for (let q=0;q<10;q++){

    console.log(q)
}

//example for loop for getting multiple of 2 and 5 between 1 to 10
for(w=1;w<=10;w++){

    if(w%2==0 && w%5==0){   //&& means AND    || means OR
        console.log(w)
    }
}

//break,nested if
let n=0
for(w=1;w<=10;w++){

    if(w%2==0 && w%5==0){   
        n++
        console.log(w)
        if(n==3)
        break
    }
}