// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','angular','aws','docker','python core','python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','node.js','python','java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray);

// --написати пошук всіх об'єктів, в яких в modules є sass

console.log(coursesArray.filter(course => {
    return course.modules.includes('sass')

}));
// --написати пошук всіх об'єктів, в яких в modules є docker

console.log(coursesArray.filter(course => {
    return course.modules.includes('docker')

}));

//// далі просто мої тренування (не зважайте) хочу відсортувати за кількістю місяців

// console.log(coursesArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log( coursesArray.filter(course => {return course.monthDuration > 5}));

// -- за допомоги map добавити id до курсів

// let coursesWithId= coursesArray.map( (course, index) => {
//     let newMass = [{
//         id: index + 1,
//         title: course.title,
//         monthDuration: course.monthDuration,
//         hourDuration: course.hourDuration,
//         modules: course.modules,
//     }]
//     return newMass;
// })
// console.log(coursesWithId);

// let qwerty = ['asdasd',13213, 'all'];
// qwerty.push(false)
// console.log(qwerty);
