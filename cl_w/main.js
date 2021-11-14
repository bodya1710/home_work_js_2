//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// // Також потрібно врахувати коли введені рівні числа.
// let num1 = +prompt('Choose a number');
// let num2 = 7;
// if (num1 > num2){
//     alert(`There are more ${num1}`);
// }else if (num2 > num1){
//     alert(`There are more ${num2}`);
// }else if (num2 === num1) {
//     alert(`Equal numbers ${num2} =  ${num2}`);
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let numberFlat = +prompt('Your flat');
// if (numberFlat > 0 && numberFlat < 21){
//     alert('Your apartment is 1 cunt');
// }else if (numberFlat > 20 && numberFlat < 49){
//     alert('Your apartment is 2 cunt');
// }else if (numberFlat > 48 && numberFlat < 91){
//     alert('Your apartment is 3 cunt');
// }
//

//- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести
//повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('Choose a number');
// if (number === 10){
//     document.write('ВІРНО');
// }else {
//     document.write('НЕВІРНО');
// }

//- Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
// let x = {};
// if ( typeof x === "number"){
//     document.write('1');
// }else if (typeof x === "string"){
//     document.write('2');
// }else if (typeof x === "boolean" || typeof x === "object"){
//     document.write('3');
// }else{
//     document.write('4');
// }
//- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let numTem = 20;
// if (numTem >= 10 && numTem <= 22){
//     document.write('Йдемо ВЧИТИСЯ ');
// }else{
//     document.write('сидимо вдома і вчимося ОНЛАЙН');
// }
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let numR = +prompt('Ведіть число');
// switch (numR){
//     case 1:
//         document.write('Авто');
//         break;
//     case 2:
//         document.write('Мото');
//         break;
//     case 3:
//         document.write('Телефон');
//         break;
//     case 4:
//         document.write('Планшет');
//         break;
//     case 5:
//         document.write('Годиник');
//         break;
//     default :
//         document.write('Число не вірне');
//
// }