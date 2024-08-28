// #I2XsG6f
// - створити функцію яка обчислює та повертає площу
// прямокутника зі сторонами а і б
// let plosha = (a,b) => {return a * b}
// console.log(plosha (5,9));


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let colo = (r) =>{
//     let p = 3.14;
//     if (r > 0){
//         return p*(r*r);
//     }
// }
// console.log(colo(2))

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r

// 2π⋅(radius)2+2π⋅(radius)⋅(height)
//
// let ploshaCilindra = (h,r) =>{
//     let p = 3.14;
//     if (h > 0 && r > 0){
//         return (2 * p * (r*r)) + (2 * p * r * h);
//     }
// }
// console.log(ploshaCilindra(3,5));

// #SIdMd0hQ
// ?????????- створити функцію яка приймає масив та виводить кожен його елемент
//
// empty = (mass) => {
//
//     for (let i = 0; i < mass.length; i++) {
//         const Element = mass[i];
//         console.log(Element);
//     }
// }
// empty([123, true, 'qweqwe']);


// #59g0IsA
// - створити функцію яка створює параграф з
// текстом та виводить його через document.write.
// Текст задати через аргумент

// let paragraf = (text) => {
//     document.write(`<p>${text}</p>`);
// }
paragraf('asdasdasdasdqqqqqq')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та
// виводить його через document.write. Текст li задати через аргумент
// всім однаковий
// let spusok = (punktu) =>{
//     document.write(`<ul>`);
//     document.write(`<li>${punktu}</li><li>${punktu}</li><li>${punktu}</li>`);
//     document.write(`</ul>`);
//
// }
// spusok('323251adasdasd')
// spusok(123)
//

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати
// цикл) та виводить його через document.write

// let list = (li, text) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < li; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// list( 3, '123adasdada')

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список (ul li) та
// виводить його через document.write

// let list = (text) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < text.length; i++) {
//        const element = text[i]
//         document.write(`<li>${element}</li>`)
//     }
//     document.write(`</ul>`);
// }
// list([123, true, '123qweqwe'])


// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,
// name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let massiv = (people) =>{
//     for (const person of people) {
//         console.log([person.id, person.name, person.age]);
//         document.write(`${person.id}, ${person.name}, ${person.age}`);
//     }}
// massiv ([{id: 3, name:'igor', age:33}])

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// let minimal = (mass) =>{
//     let min = mass[0];
//     for (const mass1 of mass) {
//         if (mass1 < min){
//             min = mass1;
//         }
//     }
//     return min;
// }
// console.log(minimal([1,5,-1,3]))
// document.write(minimal([1,5,-1,3, -4]))

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// let sum = (mass) => {
//     let summa = 0;
//     for (const mass1 of mass) {
//         summa = summa + mass1;
//     }
//     return summa;
// }
// console.log(sum([1,2,10]))
// document.write(sum([1,2,10]))





// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями
// заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr,index1,index2) =>{
//     if (index1 < arr.length && index2 < arr.length){
//         let box = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = box;
//         return arr
//             }
//         return false
//     }
// console.log(swap([11,22,33,44],0,1))


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange
// (sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange
// (10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')
// => 400

// let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
//     let pocursu;
//     for (const point of currencyValues) {
//         if (point.currency === exchangeCurrency) {
//             pocursu = point;
//         }
//     }
//     return sumUAH/pocursu.value;
//
// }
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR'))
