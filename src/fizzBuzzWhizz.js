/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */
const game = (input) => {
  var output = '';
  if(isPrime(input)){
    return 'Whizz';
  }else{
    if(input % 3 == 0){
      output += 'Fizz'
    }
    if(input % 5 == 0){
      output += 'Buzz'
    }
    if(input % 3 != 0 && input % 5 != 0){
      output = input;
    }
  }
  return output;
}

const isPrime = (numero) => {
  // Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;

	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

export { isPrime, game };