// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a ='hello world';
// console.log(a.length);
// let b ='lorem ipsum'
// console.log(b.length);
// let c = 'javascript is cool';
// console.log(c.length);

//створити функцію яка створює параграф з текстом.
// Текст задати через аргумент


// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());

// let mass = ['hello world', 'lorem ipsum', 'javascript is cool' ];
// for (const mass1 of mass) {
//     console.log(mass1.toUpperCase());
// }



// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// console.log('hello world'.toLowerCase());
// console.log('lorem ipsum'.toLowerCase());
// console.log('javascript is cool'.toLowerCase());

// let mass = ['hello world', 'lorem ipsum', 'javascript is cool' ];
// for (const mass1 of mass) {
//     console.log(mass1.toLowerCase());
// }


// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// console.log(' dirty string   ');
// console.log(' dirty string   '.trim());


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

    // let PanasMurnui = 'Ревуть воли як ясла повні';
    // console.log(PanasMurnui.split(' '));

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві
// на стрінгові.

// let numbs = [10,8,-7,55,987,-1011,0,1050,0] ;
// console.log(numbs);
// let numsString = numbs.map(numb => numb.toString());
// console.log(numsString);

// #5hqyKTfmc
// - створити функцію , яка прймає масив чисел, та сортує його від
// більшого до меньшого, або навпаки в залежності від значення аргументу
// direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// ==========================

// sortNumbs = (numbs, direction) =>{
//     if(direction === 'ascending') {
//         numbs.sort((a, b) => a - b);
//     }
//     if(direction === 'descending'){
//         numbs.sort((a, b) => b - a);
//     }
//     return numbs;
// }
// console.log(sortNumbs([11, 21, 3], 'ascending'));
// console.log(sortNumbs([11, 21, 3], 'descending'));


// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// =========================
// -- відсортувати його за спаданням за monthDuration

// coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
// console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let bigcourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
// console.log(bigcourses);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let proMap = coursesAndDurationArray.map((course, index) => {
//     let newProMap = {
//         id: index + 1,
//         title: course.title,
//         monthDuration: course.monthDuration
//     };
//     return newProMap;
// })
// console.log(proMap);


//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
``



const values = ['6','7','8','9','10','J','Q','K','T'];
const cardSuit = ['spade', 'diamond','heart', 'clubs']
const color = ['red','black']

const allCards = [];
for (const suit of cardSuit) {
    for (const value of values) {
        const onecard = {card: suit, value: value};
        console.log()
        if  (suit === 'spade' || suit === 'clubs'){
            onecard.color = color[1];
        } else{
            onecard.color = color[0];
        }
        allCards.push(onecard);
    }
}
console.log(allCards);


// - знайти піковий туз
console.log(allCards.find(onecard => onecard.value === 'T' && onecard.card === 'spade'));
// - всі шістки

console.log(allCards.filter(onecard => onecard.value === '6'));

// - всі червоні карти
console.log(allCards.filter(onecard => onecard.color === 'red' ));

// - всі буби
console.log(allCards.filter(onecard => onecard.card === 'diamond' ));

// - всі трефи від 9 та більше
console.log(allCards.filter(onecard => onecard.card === 'clubs' && onecard.value !== '9' && onecard.value !== '8' && onecard.value !== '7' && onecard.value !== '6'));
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт


let allCardsReduces = allCards.reduce((acc, typeCard) => {

    if (typeCard.card === 'spade'){
        acc.spades.push(typeCard);

    }else if (typeCard.card === 'diamond') {
        acc.diamonds.push(typeCard);

    }else if (typeCard.card === 'heart') {
        acc.hearts.push(typeCard);

    } else if (typeCard.card === 'clubs') {
        acc.clubs.push(typeCard);
    }
    return acc;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(allCardsReduces);


