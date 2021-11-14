//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
// let time = Math.floor(Math.random()  * 59);
// if (time>= 0 && time <= 15){
//     document.write(`<h2>Перша четверть</h2>`);
// }else if (time> 15 && time <= 30){
//     document.write(`<h2>Друга четверть</h2>`);
// }else if (time> 30 && time <= 45){
//     document.write(`<h2>Третя четверть</h2>`);
// }else if (time> 45 && time <= 59){
//     document.write(`<h2>Чеверта четверть</h2>`);
// }

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).
// let day = 0;
// if (day > 0 && day <= 10){
//     document.write(`<h2>Перша декада</h2>`);
// }else if (day > 10 && day <= 20){
//     document.write(`<h2>Друга декада</h2>`);
// }else if (day > 20 && day <= 31) {
//     document.write(`<h2>Третя декада</h2>`);
// }

//- У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = 1>2;
// if (!test){
//     document.write(`<h2>Вірно</h2>`);
// }else{
//     document.write(`<h2>Неправильно</h2>`);
// }
// if (test){
//     document.write(`<h2>True</h2>`);
// }else if (!test){
//     document.write(`<h2>False</h2>`);
// }
// test ?  document.write(`<h2>True</h2>`) : document.write(`<h2>False</h2>`);

//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//    що дорівнює 1, 0, -3

// let a = -3;
// if (a > 0 || a < 0){
//     document.write(`<h2>Вірно</h2>`);
// }else {
//     document.write(`<h2>Невірно</h2>`);
// }
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня
// тижня і на екрані відображається інфа що заплановано на цей день.
// let bumDay = +prompt('Номер тижня');
// switch (bumDay) {
//     case 1:
//         document.write('Вчити Js');
//         break;
//     case 2:
//         document.write('Вчити CSS');
//         break;
//     case 3:
//         document.write('Вчити HTML');
//         break;
//     case 4:
//         document.write('Вчити English');
//         break;
//     case 5:
//         document.write('Вчити React');
//         break;
//     case 6:
//         document.write('Вчити Node');
//         break;
//     case 7:
//         document.write('Chill');
//         break;
//     default : document.write('Тиждень має 7 днів');
// }

//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let numYear = 2021;
// if (numYear % 4){
//     alert('Рік не високосний')
// }else {
//     alert('Рік високосний')
// }
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let nameJs
// if (nameJs === undefined){
//      nameJs = prompt('Яка «офіційна» назва JavaScript?');
//  if (nameJs === 'ECMAScript'){
//         alert('Правильно!');
//     }else{
//      alert('Не знаєте? ECMAScript');
//  }
// }
