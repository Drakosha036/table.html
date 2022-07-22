function oldSchoolAdd() {
    //Function body
    console.log('Hey oldSchool');
    return 2 + 3;
}

const esNextAdd = () => {
    //function body
    console.log('Hey esNext');
    return 2 + 3;
}

/**
 * 
 * @param {number} operande1 
 * @param {number} operande2 
 * @returns Sum of operande1 and operande2 or Nan if not defined
 */

//argument = operandes on peut nommer comme on veut 
const addition = (operande1, operande2) => {
    operande1 = 12;
    return operande1 + operande2;
} 

//call a function
//recuperer le resultat de la fonction
const resultOldSchool = oldSchoolAdd();
const resultEsNext = esNextAdd();
console.log(`And the result is: ${resultOldSchool} and ${resultEsNext}`);

console.log(`Addition result is : ${addition()}`);

let value = 3;

const result = addition(value, 2);
console.log(`With variable result is ${result}`);
console.log(`Value : ${value}`); //c'est une copie car result ne change pas

/**
 * 
 * @param {number} operande1 
 * @param {nmber} operande2 
 * @returns Result of multiply of two numbers operande1 and operande2 or Nan if not defined
 */
//function multiply
const multiply = (operande1, operande2) => {
    return operande1 * operande2;
}

const resultMultiply = multiply(value, 5);
console.log(`Result of multiply is : ${resultMultiply}`);


/**
 * 
 * @param {number} operande1 
 * @param {number} operande2 
 * @returns Return the double of sum of two values
 */
//fonction qui retourne le double de la somme de deux valeurs
const doubleSumOfValues = (operande1, operande2) => {
    return multiply(addition(operande1, operande2), 2);
    //return 2 * (operande1 + operande2);
}

const resultOfDouble = doubleSumOfValues(value, 2);
console.log(`Le Double de la somme de deux valeurs est : ${resultOfDouble}`);


const double = multiply(addition(3, 2), 2);
console.log(`double egal : ${double}`);

