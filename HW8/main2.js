// // #AiN5CoUQ
// // Створити функцію, яка робить глибоку копію об'єкту.
// // Додаки перевірки на undefined, null, NaN.
// //     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.


function deepCopy (object) {
    if(object){
        let functions = [];
        for (const objectKey in object) {
            // console.log(typeof object[objectKey]);
            if(typeof object[objectKey] === 'function' ){
              const copyFunctions = object[objectKey].bind({})
                functions.push({copyFunctions, objectKey});
            }
        }
        console.log(functions);

  const sjson = JSON.stringify(object);
        console.log(sjson)

  const pJson = JSON.parse(sjson);
        // pJson [functions[0].objectKey] = functions[0].copyFunctions;
        // pJson [functions[1].objectKey] = functions[1].copyFunctions;
        for (const funccia of functions) {
            pJson[funccia.objectKey] = funccia.copyFunctions;
        }
        console.log(pJson);

  return pJson;

}
    console.log('У вас помилка');
    // throw new Error('Помилка');    // - генерація помилки
}
deepCopy({id: 12, name:'olga', surname: 'kapusta', others(){}, pokupki(){} })












// // #iz6emEsP2BA
// // - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// //     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
console.log(coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course})));

