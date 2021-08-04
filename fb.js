let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
     console.log(i);
    } 
};

//if (((num/3) == 0) && ((num/5)== 0)){
//    print "FizzBuzz"
//} else if ((num/5) == 0) {
 //   print "Buzz"
//} else if ((num/3)== 0){
  //  print "Fizz"
//} else {
    // print num
    // }