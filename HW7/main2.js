// // // #XjJuucOMR0
// // // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // // створити пустий масив, наповнити його 10 об'єктами new User(....)
// // class User{
// //     constructor(id, name, surname , email, phone){
// //         this.id = id;
// //         this.name = name;
// //         this.surname = surname;
// //         this.email = email;
// //         this.phone = phone;
// //     }
// // }
// // const users =[
// //     new User('32','olya','qwerty','12312312@rewer.com','+323123123123'),
// //     new User('12','gector','asdfg','iuy@wqe.ua','+321928986')
// // ]
// // console.log(users)
// //
// // for (const user of users) {
// //     console.log(user.id);
// // }
// // console.log(users.sort((a,b) => a.id - b.id));
// //
// //
// //
// /////////////////////////////////////////////////////////////////////////////
// // // #2ikXsE2WiKZ
// // // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// // // залишивши тільки об'єкти з парними id (filter)
// //
// // // let tolpaFilter = tolpa.filter(User => User.id % 2 === 0)
// // // console.log(tolpaFilter)
// //
// // ///////////////////////////////////////////////////////////////////////////////
// //
// // // #pOeHKct
// // // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// // // let tolpaFilterSort = tolpaFilter.sort((a,b) => a.id - b.id)
// // // console.log(tolpaFilterSort)
// //
// // ////////////////////////////////////////////////////////////////////////////////
//
//
// // // #nkMXISv
// // // - створити класс для об'єктів Client з полями id, name, surname ,
// // // email, phone, order (
// // // поле є масивом зі списком товарів)
// // // створити пустий масив, наповнити його 10 об'єктами Client
// //
// // class Client {
// //     constructor(id, name, surname, email, phone, order) {
// //         this.id = id;
// //         this.name = name;
// //         this.surname = surname;
// //         this.email = email;
// //         this.phone = phone;
// //         this.order = order;
// //         }
// // }
// // const clients = [
// //     new Client('123','egorka','pavlov','123@oiu.ua','+39817237612873',['kasha', 'uksus'] ),
// //     new Client('12','olejka','stol9r','123123@oiu.ua','+3555555552873',['kasha', 'sahar', 'moloko'] )
// // ]
// // for (const client of clients) {
// //     console.log(client);
// // }
// // console.log(clients[1].order)
// // ////////////////////////////////////////////////////////////////////////////////
// // // #8abtVjRv
// // // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по
// // // кількості товарів в полі order по зростанню. (sort)
// //
// // console.log(clients.sort((a,b) => a.order.length - b.order.length));
// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // #vV9a6584I5
// // // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // // // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
// class Car {
//     constructor(model, manufacturer, yearOfmanufacture, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfmanufacture = yearOfmanufacture;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     info () {
//         for (const argument in this) {
//             console.log(argument, this[argument]);
//         }
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         console.log(this.maxSpeed)
//     };
//     changeYear (newOfyear) {
//         this.yearOfmanufacture = newOfyear;
//         console.log(this.yearOfmanufacture)
//     };
//     newDrive (driverObj) {
//         this.driver = driverObj;
//     }
// }
// const car = new Car('BMW', 'Germany', 2000, 220, 3);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2220)
// car.newDrive({name: 'gowa', age: '35'})
// console.log(car);
// /////////////////////////////////////////////////////////////////////////////////////////////////


// // #zg6Fifnqig
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// // Створити масив з 10 попелюшок.
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля
// // ім'я, вік, туфелька яку він знайшов.
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Popelushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const nevestu = [
//     new Popelushka('olya', 22, 45),
//     new Popelushka('tanya', 19, 35),
//     new Popelushka('lena', 32, 36),
//     new Popelushka('dmitrii', 61, 38),
//     new Popelushka('anna', 20, 39),
//     new Popelushka('marina', 17, 37),
//     new Popelushka('ksenia', 33, 39),
//     new Popelushka('tamara', 98, 41),
//     new Popelushka('dasha', 15, 42),
//     new Popelushka('masha', 23, 43),
// ];
// console.log(nevestu);
//
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// const prince = new Prince('funtic', '36', 36);
// console.log(prince);
//
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (const nevesta of nevestu) {
//     if (nevesta.footSize === prince.shoeSize) {
//         console.log(nevesta);
//     }
// }
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву
// //     find та відповідного колбеку
//
// let taSama = nevestu.find(nevesta => nevesta.footSize === prince.shoeSize);
// console.log(taSama);
//
//
// ////////////////////////////////////////////////////////////////////////////////
//
//
// // #gsKLAsNWM
// // *Через Array.prototype. створити власний foreach, filter
//
// // Array.prototype.moyMassiv = function (vozvrat){
// //     for (const MassivElement of this) {
// //         vozvrat(MassivElement);
// //     }
// // };
// // nevestu.moyMassiv( (nevesta)  => console.log(nevesta));
// //
// //
//
// ///////////////////////////////////////////////////////////
//
// Array.prototype.kakoitoMassiv = function (filtracia){
//     const noviyMassiv = [];
//     for (const elemtntKakogotoMassiv of this) {
//         if (filtracia(elemtntKakogotoMassiv)){
//             noviyMassiv.push(elemtntKakogotoMassiv);
//         }
//     }
//     return noviyMassiv;
// };
// let PopelushStarshe30 = nevestu.kakoitoMassiv((nevesta) => nevesta.age > 30);
// console.log(PopelushStarshe30.sort((a, b) => a.age - b.age));
