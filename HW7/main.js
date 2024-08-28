// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const user = new User(3,'olya','tr9pkina', 'qwe@qwe.com', '+32412412123123');
// console.log(user);
//
// let tolpa = [
//     new User(13,'olya','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
//     new User(24,'tol9','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
//     new User(3,'Катя','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
//     new User(45,'надя','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
//     new User(56,'мася','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
//     new User(61,'Саша','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
//     new User(72,'гном','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
//     new User(89,'клоун','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
//     new User(19,'даша','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
//     new User(10,'маша','tr9pkina', 'qwe@qwe.com', '+32412412123123'),
// ]
// console.log(tolpa);


/////////////////////////////////////////////////////////////////////////////


// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

// let tolpaFilter = tolpa.filter(User => User.id % 2 === 0)
// console.log(tolpaFilter)

///////////////////////////////////////////////////////////////////////////////

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let tolpaFilterSort = tolpaFilter.sort((a,b) => a.id - b.id)
// console.log(tolpaFilterSort)

////////////////////////////////////////////////////////////////////////////////


// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname ,
// email, phone, order (
// поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// function Client (id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
//     let client =[
//         new Client (1,'gena','rukola','xczxczxc@qweqwe.com','+021837198238716', ['hlib','m9so', 'chai']),
//         new Client (5,'stepa','hovrah','asdasdqw@qweqwe.com','+123987129837123', ['hlib','sir', 'luk']),
//         new Client (12,'Tanya','Krabova','krab@qweqwe.com','+098987786', ['hlib','m9so', 'chai']),
//         new Client (54, 'ol9', 'zabolotnia','908jkjk@12312.com','+321290897897', ['ris','grexhka'] ),
//         new Client (21, 'ol9', 'zabolotnia','908jkjk@12312.com','+321290897897', ['kava','poroshok','9ica', 'chai'] ),
//         new Client (212, 'ol9', 'zabolotnia','908jkjk@12312.com','+321290897897', ['poroshok','9ica', 'chai'] ),
//         new Client (33, 'ol9', 'zabolotnia','908jkjk@12312.com','+321290897897', ['poroshok','korm', 'salo', 'bur9k', '9ica', 'chai'] ),
//         new Client (4, 'ol9', 'zabolotnia','908jkjk@12312.com','+321290897897', ['poroshok','morkva', 'muka', 'krypu', 'shokolad','9ica', 'chai'] ),
//         new Client (121, 'ol9', 'zabolotnia','908jkjk@12312.com','+321290897897', ['poroshok','9ica', 'mulo', 'chai'] ),
//         new Client (29, 'ol9', 'zabolotnia','908jkjk@12312.com','+321290897897', ['poroshok','9ica', 'chai'] )
//     ];
// console.log(client);


////////////////////////////////////////////////////////////////////////////////


// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по
// кількості товарів в полі order по зростанню. (sort)

// let clientSort = client.sort((a,b) => a.order.length - b.order.length)
// console.log(clientSort);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
//     };
//     this.info = function () {
//         for (const argument in this) {
//             console.log(argument, this[argument])
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maximumSpeed = this.maximumSpeed + newSpeed;
//
//     };
//     this.changeYear = function (newYear) {
//         this.yearOfManufacture = newYear;
//     };
//     this.addDriver = function (driverObj) {
//         this.driver = driverObj;
//     }
// }

// const car = new Car('Skoda', 'Czech', 2015, 220, 1.4);
// console.log(car);
// car.drive();
// car.info();

// car.increaseMaxSpeed(50);
// car.changeYear(2020)
// car.addDriver({name: 'Vasia', age: 32})
// console.log(car);
// console.log(car.driver.name);


/////////////////////////////////////////////////////////////////////////////////////////////////


// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor (model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maximumSpeed = maximumSpeed;
//         this.engineCapacity = engineCapacity
//     }
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`);
//         };
//         info() {
//             for (const argument in this) {
//                 console.log(argument, this[argument])
//             }
//         };
//         increaseMaxSpeed (newSpeed) {
//             this.maximumSpeed = this.maximumSpeed + newSpeed;
//
//         };
//         changeYear(newYear) {
//             this.yearOfManufacture = newYear;
//         };
//         addDriver (driverObj) {
//             this.driver = driverObj;
//         }
//     }
//
// const car = new Car('Skoda', 'Czech', 2015, 220, 1.4);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020)
// car.addDriver({name: 'Vasia', age: 32})
// console.log(car);
// console.log(car.driver.name);


///////////////////////////////////////////////////////////////////////////////


// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.

// Сторити об'єкт класу "принц" за допомоги класу який має поля
// ім'я, вік, туфелька яку він знайшов.

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popelushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

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

// const prince = new Prince('funtic', '36', 36);
// console.log(prince);
//
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (const nevesta of nevestu) {
//     if (nevesta.footSize === prince.shoeSize) {
//         console.log(nevesta);
//     }
// }
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву
//     find та відповідного колбеку

// let taSama = nevestu.find(nevesta => nevesta.footSize === prince.shoeSize);
// console.log(taSama);


////////////////////////////////////////////////////////////////////////////////


// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.moyMassiv = function (vozvrat){
//     for (const MassivElement of this) {
//         vozvrat(MassivElement);
//     }
// };
// nevestu.moyMassiv( (nevesta)  => console.log(nevesta));
//
//

///////////////////////////////////////////////////////////

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
