"use strict"


let otherText = 'Hello world';
console.log(otherText);

//№1
console.log('Учим JS');

//№2
console.log('JS');
console.log('Учим');

//№3
/* В третьому варіанті помилка, щоб код був виконаний в консолі
потрібно: 1) записати кожну з команд на окрему строку 2) в кінці поставити ';'
console.log('Учим') console.log('JS')*/
console.log('Учим');
console.log('JS');

let user;
let userName;
let userEyes;
userName = 'Вася';
user = userName;
console.log(typeof user);
console.log(user);


//№1
/*let userText = 'Вася' let age = 36
Помилка в записі строки, якщо записувати в одну строку або записане 
як об'єкт */
// let userText = 'Вася'; age = 36;
// Або
let userText = 'Вася';
let age = 36;

//№2
/*Порушення синтксису в консолі це не відображається, як помилка
але краще написати myAge*/
let myage = 36;

//№3
const BLOCK_SIZE = 14 + 50;

//№4
const BLOCK_HEIGHT = 100;

//№5
if (true) {
	var size = 15;
}
console.log(size);

//№1
let userAge = 36;
let userInfo = "Фрилансер ${userAge}";

//№2
/*В цьому випадку результатом ділення на нуль буде нескінченність*/
let userHeight = 145 / 0;
console.log(userHeight);

//№3
/*Значення не визначене тому, як результат в цьому випадку null не може бути*/
let userFirstName;
console.log(typeof userFirstName);

//№4
let userSize = "45" / "8";
console.log(typeof userSize); 