
//
// let arr = [];
// for (let i = 1; i<51; i++) {
//     arr.push(i)}
// document.write(arr);


// -----------1a заповнити його 50 парними числами за допомоги циклу-------------------

// let empty = [];
// for (let i = 2; i < 102; i+=2) {
// empty.push(i);
// }
// document.write(empty)

// -----------1b заповнити його 50 непарними числами за допомоги циклу-------------------

// let empty = [];
// for (let i = 1; i < 100; i+=2) {
//     empty.push(i);
// }
// document.write(empty)

// -----------1c Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)-------------------


// let empty = [];
// for (let i = 0; i < 20; i ++) {
//     let a = Math.round(Math.random() * 200);
//     empty.push(a);
// }
// document.write(empty)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let empty = [];
// for (let i = 0; i < 20; i ++) {
//     let a = Math.round(Math.random() * (8, 732));
//     empty.push(a);
// }
// document.write(empty)

// 2. Вивести за допомогою console.log кожен третій елемен
// let empty = [];
// for (let i = 0; i<50; i++) {
//     empty.push(i+=2);
// }
// console.log(empty)

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let empty2 = [];
// for (let i =0; i<50; i++) {
//     empty2.push(i += 2);
//     if (i % 2 == 0) {
//         console.log(i);
//
//     }
// }
// ??????????4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати
// їх в новий масив

// let empty2 = [];
// let empty3=[];
// for (let i =0; i<50; i++) {
//     empty2.push(i += 2);
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// empty3.push(empty2[i]);
// console.log(empty3)


    // 5. Вивести кожен елемент масиву, сусід справа якого є парним
    // EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
    // 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
    //
    // 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
    // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
    //
    //
    //
    // - Дано 2 масиви з рівною кількістю об'єктів.
    // Масиви:
    //     let usersWithId = [
    //         {id: 1, name: 'vasya', age: 31, status: false},
    //         {id: 2, name: 'petya', age: 30, status: true},
    //         {id: 3, name: 'kolya', age: 29, status: true},
    //         {id: 4, name: 'olya', age: 28, status: false}
    //     ];
    //
    // let citiesWithId = [
    //     {user_id: 3, country: 'USA', city: 'Portland'},
    //     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    //     {user_id: 2, country: 'Poland', city: 'Krakow'},
    //     {user_id: 4, country: 'USA', city: 'Miami'}
    // ];
    //
    // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    //     Записати цей об'єкт в новий масив
    // Example:
    //     let usersWithCities = [
    //             {
    //                 id: 1, // <===
    //                 name: 'vasya',
    //                 age: 31,
    //                 status: false,
    //                 address: {
    //                     user_id: 1, // <===
    //                     country: 'Ukraine',
    //                     city: 'Ternopil'
    //                 }
    //             },
    //             // TO BE CONTINUED .....
    //         ]
    //
    //
    //
    //
    //         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
    //
    // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
    //
    //
    // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let arr1 = ['a', 'b', 'c'];
let i = 0;
while (i < arr1.length) {
    document.write(arr1[i])
    i++;
}


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let oneWord=[];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     oneWord += arrElement;
// }
// console.log(oneWord);