

exports.multipleOfThree = function(number){
  if(number % 3 == 0)
    return true;
  return false;
}

exports.multipleOfFive = function(number){
  if(number % 5 == 0)
    return true;
  return false;
}

function fizzbuzz () {
  for(i = 0; i < 100; i++) 
  {
      if (i % 3 === 0 && i % 5 === 0)
      {
        console.log("FizzBuzz");                    
      }
      else 
        if(i % 3 === 0)
        {
          console.log("Fizz");
        }
        else 
          if(i % 5 === 0)
          {
            console.log("Buzz");
          }
          else
            console.log(i);
  }
}

fizzbuzz()