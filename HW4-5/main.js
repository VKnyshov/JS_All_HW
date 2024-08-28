// #I2XsG6f
// - створити функцію яка обчислює та повертає площу
// прямокутника зі сторонами а і б

// function areaRectangle  (sideA, sideB) {
//     if (sideA > 0 && sideB > 0) {
//         return sideA * sideB;
//     }
//     return 0;
// }
//     let result =  areaRectangle (12, 10);
//     console.log(result);
//     document.write(`${result}, `)


// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r


// function areaCircle (p, r){
//         if (r > 0){
//             return (p * (r*r));
//         }
//         return false;
//
// }
//     let p = 3.14;
//     let res2 = areaCircle(p, 5);
//     console.log(res2);;
//     document.write(`${res2}`)

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r


// 2π⋅(radius)2+2π⋅(radius)⋅(height)

// function areaCylinder (p, h, r){
//     if (r > 0 && h > 0){
//         return ((2 * p * (r*r)) + (2 * p * (r * r) * h));
//     }
//     return false;
//
// }
// let p = 3.14;
// let res3 = areaCylinder(p, 5,2);
// console.log(res3);
// document.write(`${res3}`)

// #SIdMd0hQ
// ?????????- створити функцію яка приймає масив та виводить кожен його елемент

// function empty (array) {
//     for (let i = 0; i < array.length; i++) {
//         const Element = array[i];
//         console.log(Element);
//         document.write(`${Element}`)
//     }
// }
// empty('1 2 3 ');
// empty ('2 ')
// empty ('re')


//     for (const item of array) {
//         console.log(item);
//         document.write(`${item} `);
//     }
// }
// let res4 = empty('1 2 3')

// #59g0IsA
// - створити функцію яка створює параграф з
// текстом та виводить його через document.write.
// Текст задати через аргумент


// function pText (words){
//     document.write(`<p> ${words} </p>`);}
// pText('qweqweqwe');
//

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та
// виводить його через document.write. Текст li задати через аргумент
// всім однаковий

// function list (text){
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }
// list('qwerty')

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати
// цикл) та виводить його через document.write

// function list (li, text){
//     document.write(`<ul>`);
//     for (let i = 0; i < li; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// list( 6, '123adasdada')

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список (ul li) та
// виводить його через document.write

// function listOFotherType (meaning){
//     document.write(`<ul>`);
//      for (let i = 0; i < meaning.length; i++) {
//         const meaningElement = meaning[i];
//         document.write(`<li>${meaningElement} </li>`)
//     }
//     document.write(`</ul>`);
// }
// listOFotherType([1, 2, 'asds1213', true]);
//
//



// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,
// name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// function characteristics (peoples){
//     for (const people of peoples) {
//         document.write(`<div> ${people.id} ${people.name} ${people.age} </div>`)
//     }
// }
// characteristics([
//     { id: 1, name: 'Max', age: 10 },
//     { id: 2, name: 'John', age: 20 },
//     { id: 3, name: 'Loren', age: 30 }
// ])

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву


// function minimal(massivNum){
//     let min = massivNum[0];
//     for (let i = 1; i < massivNum.length; i++) {
//         const massivNumElement = massivNum[i];
//         if (massivNumElement < min){
//             min = massivNumElement;
//         }
//            }
//     return min;
//     }
//     document.write(`${minimal([1,3,5,-4])}`)
//     console.log(minimal([1,3,5,-8]))
//

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13



// function sum(arr) {
//     let slogaemoe = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         slogaemoe = slogaemoe + arrElement;
//     }
//     return slogaemoe;
// }
// document.write(`${sum([1,2,10])}`);
// console.log(sum([1,3,5, -3]))



// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями
// заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr,index1,index2){
//     if(index1 < arr.length && index2 < arr.length) {
//         let elementArr = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = elementArr;
//         return arr;
//     }
//     return false;
// }
//
// document.write(`${swap([11,22,33,100], 3, 1)}`);
// console.log(swap([1,3,5,6], 0, 5))


// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange
// (sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange
// (10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD')
// => 400
//     function exchange (sumUAH,currencyValues,exchangeCurrency){
//         let variantCurr;
//         for (const index of currencyValues) {
//             if (index.currency === exchangeCurrency){
//                 variantCurr = index;
//             }
//         }
//         let res = sumUAH/variantCurr.value
//         return res;
// }
//
// console.log(exchange (10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))
// document.write(`${exchange (10000,[{currency:'USD',value:25},{currency:'EUR',value:27}],'EUR')}`)
