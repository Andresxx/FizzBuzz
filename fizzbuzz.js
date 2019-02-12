
const  MAX_RANGE = 100;

multipleOfThree = function(number){
  if(number % 3 == 0)
    return true;
  return false;
}

multipleOfFive = function (number){
  if(number % 5 == 0)
    return true;
  return false;
}

multipleOfFiveAndThree = function (number){
  if(multipleOfFive(number) && multipleOfThree(number))
    return true;
  return false;
}
function fizzbuzz () {
  let textToPrint;
  for(let number = 0; number < MAX_RANGE; number++) 
  {

    textToPrint = number;
    if (multipleOfFiveAndThree(number))
      textToPrint = "FizzBuzz";
    else {
      if(multipleOfThree(number))
        textToPrint = "Fizz";
      if(multipleOfFive(number))
        textToPrint = "Buzz";
    }
    console.log(textToPrint);
  }

}

fizzbuzz()