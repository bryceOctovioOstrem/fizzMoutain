// create inclusive for loop from 1 to 50
// if modules 5 and 3 equal 0 print fizzbuzz
// elseif modulous 3 = 0 fizz
// elseif modolus 5 = 0 buzz
// else print number
for (let i =1; i <=50; i++){
    if( i%3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }else if(i %3 === 0){
        console.log("fizz");
    }else if (i % 5 === 0){
        console.log("buzz");
    }else{
        console.log(i);
    }
}