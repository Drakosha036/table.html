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

