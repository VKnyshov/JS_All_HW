// - За допомогою циклу for і document.write() вивести
// 10 блоків div c довільним текстом всередині
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let anyTexts = [
    {texts:'Термина́тор» (англ. The Terminator) — американский научно-фантастически' + 'й боевик 1984 года, второй полнометражный фильм режиссёра Джеймса Кэмерона, написанный Кэмероном и Гейл Энн Хёрд по сценарию и спродюсированный самим Хёрдом.'},
    {texts:'В нём Арнольд Шварценеггер играет Терминатора, кибернетического убийцу, отправленного в прошлое с 2029 по 1984 год, чтобы убить Сару Коннор (Линда Хэмилтон), чей нерождённый сын однажды спасёт человечество от вымирания со стороны Скайнета, враждебного искусственного интеллекта в постапокалиптическом будущем. '},
    {texts:' Кайл Риз (Майкл Бин) - солдат, отправленный в прошлое, чтобы защитить Сару. Автор сценария - Кэмерон и Хёрд, а соавтор сценария - Уильям Вишер-младший получил зачёт за "дополнительный диалог".'},
    {texts:'Кэмерон придумал сюжет фильма на основе лихорадочного сна, который он пережил во время выхода своего первого фильма Пиранья 2: Нерест (1982) в Риме, и разработал концепцию в сотрудничестве с Wisher. Он продал права на проект коллеге-выпускнице New World Pictures[англ.'},
    {texts:'Хёрд при условии, что она будет продюсировать фильм только в том случае, если он станет его режиссёром; в конечном итоге Херд заключил дистрибьюторский контракт с Orion Pictures, в то время как исполнительные продюсеры Джон Дейли[англ.]'},
    {texts:'и Дерек Гибсон из Hemdale Film Corporation сыграли важную роль в организации финансирования и производства фильма'},
    {texts:'Первоначально Orion предложил Шварценеггеру роль Риза, но тот согласился сыграть заглавного персонажа после того, как подружился с Кэмероном. '},
    {texts:'Съёмки, которые проходили в основном ночью на натуре в Лос-Анджелесе, были отложены из-за обязательств Шварценеггера перед Конаном разрушителем (1984), во время которых Кэмерон нашёл время поработать над сценариями Рэмбо: Первая кровь 2 (1985) и Чужие (1986).'},
    {texts:'Спецэффекты фильма, включавшие миниатюры[англ.] и покадровую анимацию, были созданы командой художников во главе со Стэном Уинстоном и Джином Уорреном-младшим[англ.].'},
    {texts:'Вопреки низким ожиданиям перед релизом, «Терминатор» в течение двух недель возглавлял кассовые сборы в Соединённых Штатах, собрав в итоге 78,3 миллиона долларов при скромном бюджете в 6,4 миллиона.'},
    {texts:'Считается, что именно с этого фильма началась кинокарьера Кэмерона и укрепился статус Шварценеггера как исполнителя главной роли[англ.]. '}
]
for (const box of anyTexts) {
    document.write(`<div class="firstTask"> <p>${box.texts}</p></div>`)}



// -------next task----------------------------------------------------------------------------------------------------------
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//     За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


let tenHeadlines= [
    {nameMovie:'Terminator1'},
    {nameMovie:'Terminator2'},
    {nameMovie:'Terminator3'},
    {nameMovie:'Kung Fu Panda'},
    {nameMovie:'Kung Fu Panda2'},
    {nameMovie:'Kung Fu Panda3'},
    {nameMovie:'Kung Fu Panda4'},
    {nameMovie:'The Hunger Games1'},
    {nameMovie:'The Hunger Games2'},
    {nameMovie:'The Hunger Games3'},
]
let index = 0
while (index < tenHeadlines.length){
    document.write(`<div class="withWhile"><h1>${tenHeadlines[index].nameMovie}</h1></div>`)
    index++;
}


// -------next task----------------------------------------------------------------------------------------------------------
//     - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    let i = 0
document.write(`<ul>`)

while (i < listOfItems.length){
    document.write(`<div class="list"><li>${listOfItems[i]}</li></></div>`)
    i++;
}
document.write(`</ul>`)

// -------next task----------------------------------------------------------------------------------------------------------

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://twam.ru/wp-content/uploads/2024/03/chai-74.webp'
    },
];

for (const prod of products) {
    document.write(`
<div class="product-card">
    <img src="${prod.image}" alt="${prod.title}" class="product-image">
    <h3 class="product-title"> ${prod.title}. Price - ${prod.price}</h3>
</div>
`)}

// -------next task----------------------------------------------------------------------------------------------------------

// є масив/ за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write(`<div class="true">`)
document.write('<h3>Користувачі зі статусом true: </h3>')
for (let i=0; i < users.length; i++)
{if (users[i].status === true) {
        document.write(users[i].name , ' ')
    }
}
document.write(`</div>`)


document.write(`<div class="true">`)
document.write('<h3>Користувачі зі статусом false: </h3>')
for (let i=0; i < users.length; i++)
{if (users[i].status === false) {
    document.write(users[i].name, ' ')
}
}
document.write(`</div>`)



document.write(`<div class="true">`)
document.write('<h3>Користувачі які старші за 30 років: </h3>')
for (let i=0; i < users.length; i++)
{if (users[i].age > 30) {
    document.write(users[i].name, ' ')
}
}
document.write(`</div>`)


