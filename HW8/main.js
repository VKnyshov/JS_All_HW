// // #AiN5CoUQ
// // Створити функцію, яка робить глибоку копію об'єкту.
// // Додаки перевірки на undefined, null, NaN.
// //     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//
//
// class Car {
//     constructor(id, marka, model, year, rashod, maxSpeed) {
//         this.id = id;
//         this.marka = marka;
//         this.model = model;
//         this.year = year;
//         this.rashod = rashod;
//         this.maxSpeed = maxSpeed;
//     }
//
//     enterNewModel(changeModel) {
//         this.model = changeModel;
//     }
//     message(){
//         console.log(`Ми, як дурні, поїхали у гори на ${this.marka} ${this.model} `);
//     }
//     uppercaseToAll (){
//         this.marka = this.marka.toUpperCase();
//         this.model = this.model.toUpperCase();
//     }
// }
// const car = new Car(129, 'skoda', 'fabia', 2014, 6.5, 160);
// console.log(car)
//
//
//
// car.enterNewModel('felicia')
// car.uppercaseToAll()
// console.log(car)
//
// car.message();
// const allFunction = [car.enterNewModel, car.uppercaseToAll,car.message ];
// console.log(allFunction);
//
// let newMassivCar = JSON.stringify(car);
// console.log(newMassivCar);
//
// let parseNewMassivCar = JSON.parse(newMassivCar);
// console.log(parseNewMassivCar);
//
// let [funkcia1, funkcia2, funkcia3] = allFunction;
// // console.log(funkcia1)
//
// let lastMassivCar = {...parseNewMassivCar, funkcia1, funkcia2, funkcia3};
// console.log(lastMassivCar);
// /////////////////////////////////Відпрацювання доданих функцій
// lastMassivCar.funkcia1('octavia');
// console.log(lastMassivCar);
//
// // console.log(lastMassivCar.toUpperCase())
// lastMassivCar.funkcia2();
// console.log(lastMassivCar);
//
// lastMassivCar.funkcia3();
//
// ///////////////////////////////Перевірки
//
//
// let spredCar = {...car};
// console.log(spredCar === car);
// console.log(spredCar.model === car.model);
//
// console.log(car === newMassivCar);
// console.log(car.model === newMassivCar.model);
//
// console.log(car === lastMassivCar);
// console.log(car.model === lastMassivCar.model);
//
//
//
// // #iz6emEsP2BA
// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// //     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
//
// coursesAndDurationArray.map((course, index) => {return (course.id = index+1, this.title, this.monthDuration);});
// console.log(coursesAndDurationArray);
