/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld'
Output --> 3

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/

export const sumOfIntegersInString = (input) => {
    //Obtenemos el los valores desde donde se va a recortar el string para convertirlo a un número
    var startString, finishString, stringMessage, startedCount, summation;
    startString = 0;
    finishString = 0;
    summation = 0;
    stringMessage = '';
    //Recorremos el mensaje
    //Si no se puede convertir a entero
    //  Almacenamos el valor de y en finishString
    //      Si se había iniciado el contador para saber el tamaño del arreglo
    //          guardamos la cadena de strings, le añadimos a la sumatoria el valor de la cadena y apagamos el contador
    //Si se puede convertir a entero
    //  Si el contador está apagado
    //      almacenamos el valor de y en startedString y encendemos el contador
    for(var y = 0; y < input.length; y++){
        if(TryParseInt(input[y], -1) < 0){
            finishString = y;
            if(startedCount){
                stringMessage = input.substring(startString, finishString);
                summation += parseInt(stringMessage);
                startedCount = false;
            }
        }else{
            if(!startedCount){
                startString = y;
                startedCount = true;
            }
        }
    }
    return summation;
};



function TryParseInt(str,defaultValue) {
    var retValue = defaultValue;
    if(str !== null && str != ' ') {
        if(str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
}