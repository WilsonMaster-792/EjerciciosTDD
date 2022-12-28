/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
If number is odd print 'Odd' instead of the number.
If number is even print 'Even' instead of number.
Print number as a string, if it does not meet above two conditions, means if number is Prime.
 */

export const game = (input) => {
    if(!(input == 2)){
        if(isOdd(input)){
            return 'Odd'
        }else{
            return 'Even'
        }
    }else{
        return 'Prime';
    }
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

const isOdd = (numero) => {
    // Casos especiales
      if(numero % 2 == 0){
        return true
      }
      return false;
}

export{isOdd, isPrime};