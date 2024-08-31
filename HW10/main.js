// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".
//
// const button = document.getElementById('pm');
// button.onclick = function () {
//     // document.getElementById('text').remove();
//     document.getElementById('text').style.display = 'none';
// };


//         #j693ca8
//- створити інпут який приймає вік людини та кнопку
// яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити
// про це користувача
//
// const button = document.getElementById('pm2');
// button.style.color = 'red';
// button.onclick = function () {
//     let age = document.getElementById('inp').value;
//     console.log(age);
//     if (age < 18 ) {
//         alert(`Вам ${age}! Користуватись сторінкою можуть лише повнолітні!`);
//     } else if (age >= 18){
//         alert (`Вам ${age} і цього достатньо, щоб дивитись на ніщо!`);
//     }
// };


// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт
// в документ. Іншими словами :
// заповниои форму, натиснули кнопку, під формою з'явився блок з вашим
// об'єктом
//
// const form1 = document.forms.formForNSA;
// const result = document.getElementById('dataNSA');
//
// form1.onsubmit = (ev) => {
//     ev.preventDefault();
//     const nameValue = form1.username.value;
//     const surnameValue = form1.usersurname.value;
//     const ageValue = form1.userage.value;
//     let allData = {nameValue, surnameValue, ageValue};
//     console.log(allData);
// //      result.innerText = allData.nameValue + ' ' + allData.surnameValue + ' ' + allData.ageValue;
//    result.innerText = `${nameValue} ${surnameValue} ${ageValue}`;
// };


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let newNum = +localStorage.getItem('num');
// newNum += 1;
// localStorage.setItem('num', newNum);


// #LhSfdhM3
// Є сторінка index.html (назва довільна),
// при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час
// відвідування сторінки.
// Є  сторінка Result.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки HW10.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
//
// let listOfSessions = JSON.parse(localStorage.getItem('listOfSessions')) || [];
// listOfSessions.push(new Date());
// localStorage.setItem('listOfSessions', JSON.stringify(listOfSessions));
// // продолжение в файле Index.html


// #Jg0gPO00
// створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок
//
// const convertVagu = document.getElementById('vaga');
// const resDiv = document.getElementById('resultVaga');
// convertVagu.oninput = function (){
// const dannueVChislo = +this.value   // +this.value - конвертація у числове значення
// let result = dannueVChislo * 2.2;
// resDiv.innerText = `result: ${result}`
// };


// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
// function addToLocalStorage(arrName, objectArrS){
//     const elementLS = localStorage.getItem(arrName);
//         if (!elementLS) {
//         console.log('Немає обєкту')
//     }
//     const goodMass = JSON.parse(elementLS);
//         if (typeof objectArrS === 'object') { // перевіряємо, чи наш елемент массиву еквивалентен обєкту
//             goodMass.push(objectArrS); // додаємо нову інформацію до массиву
//         }
//                  localStorage.setItem(arrName, JSON.stringify(goodMass)); // повертаємо все до нашого локал сторейдж
// };
//
// addToLocalStorage('listOfSessions', {name: 'vas9'})


//     #kUSgFqWY
// Створити 3 інпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// const table = document.getElementById("table");
// const znach = document.forms['znacheniya'];
//
// znach.onsubmit = (ev) => {
//     table.innerText = '';
//     ev.preventDefault();
//     const linesValue = +znach.lines.value;
//     const cellsValue = +znach.cells.value;
//     const dataValue = znach.data.value;
//     // console.log(linesValue, cellsValue, dataValue);
//
//     for (let i = 0; i < linesValue; i++) {
//         const tr = document.createElement("tr");
//         for (let j = 0; j < cellsValue; j++) {
//             const td = document.createElement("td")
//             td.innerText = dataValue;
//             tr.appendChild(td);
//             td.style.border = "1px solid    ";
//         }
//         table.append(tr);
//     }
// };
