// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону,
// колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let oneDiv = document.createElement('div');
// document.body.append(oneDiv);
// let pInDiv = document.createElement('p');
// pInDiv.innerText = "Hi, i'm not bad";
// oneDiv.append(pInDiv);
//
// oneDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
// oneDiv.style.backgroundColor = 'pink';
// oneDiv.style.color = 'green';
// oneDiv.style.fontSize = '30px';
// oneDiv.style.width = '180px';
// console.log(document.body.children);
//
/////////////////////////////////////////////////////////////////////////
//
// let newDiv = oneDiv.cloneNode(true);
// document.body.append(newDiv);
// newDiv.classList.remove('wrap', 'collapse');
// newDiv.style.backgroundColor = 'red';
/////////////////////////////////////////////////////////////////////////
// console.log(document.body.children);


//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву
// (кожен в своєму li)
// let arr = ['Main','Products','About us','Contacts'];
//
// const list = document.createElement('ul');
//
// for (const elementMas of arr) {
//     const textElement = document.createElement('li');
//     textElement.innerText = elementMas;
//     list.appendChild(textElement);
// }
// document.body.appendChild(list)
//
// list.style.display = 'flex';
// list.style.gap = '20px';
// list.style.fontFamily = 'sans-serif';
//
// console.log(document.body.children)


// #jeBqHV525U5
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const cours of coursesAndDurationArray) {
//     const block = document.createElement('div');
//     block.innerText = `${cours.title}, ${cours.monthDuration}`;
//     document.body.appendChild(block);
// };
// console.log(document.body.children)


//     #Kx1xgoKy8
//     - Є масив
// За допомоги скріпта для кожного елементу масиву зробити
// <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const cours of coursesAndDurationArray) {
//     const block = document.createElement('div');
//     block.classList.add('item');
//
//     const h1ForDiv = document.createElement('h1');
//     h1ForDiv.classList.add('heading');
//     h1ForDiv.innerText = `${cours.title}`;
//     block.appendChild(h1ForDiv);
//
//     const pForBlock = document.createElement('p');
//     pForBlock.classList.add('description');
//     pForBlock.innerText = `${cours.monthDuration}`;
//     pForBlock.style.fontSize = '20px';
//     pForBlock.style.fontWeight = 'bold';
//     block.appendChild(pForBlock);
//
//     document.body.appendChild(block);
// };
//
// console.log(document.body.children)


// #9p0q8y3
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його
// данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його
// інформацією з цього об'єкту
// //
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// for (const simpson of simpsons) {
//     const oneSim = document.createElement('div');
//     oneSim.classList.add('member');
//
//     const imgForSim = document.createElement('img');
//     imgForSim.src = `${simpson.photo}`;
//     imgForSim.style.width = '100px';
//
//     const infoForSim = document.createElement('p');
//     infoForSim.innerText = `${simpson.info}`;
//     infoForSim.style.width = '800px';
//
//
//     const h2ForSim = document.createElement('h2');
//     h2ForSim.innerText = `${simpson.name} ${simpson.surname} (${simpson.age} years)`;
//     oneSim.append(h2ForSim, imgForSim, infoForSim);
//
//     document.body.appendChild(oneSim);
// };
// console.log(document.body.children)


// #6RuyJ7Gu
// створити три блоки з різним текстовим контентом.
// зробити так, щоб всі блоки мали висоту найбільшого з них.
//
// // =========================
//
// const block1 = document.createElement('div');
// block1.innerText = '«Термина́тор» (англ. The Terminator) — американский научно-фантастический боевик 1984 года, второй полнометражный фильм режиссёра Джеймса Кэмерона, написанный Кэмероном и Гейл Энн Хёрд по сценарию и спродюсированный самой Хёрд. В нём Арнольд Шварценеггер играет Терминатора, кибернетического убийцу, отправленного в прошлое с 2029 по 1984 год, чтобы убить Сару Коннор (Линда Хэмилтон), чей нерождённый сын однажды спасёт человечество от вымирания со стороны Скайнета, враждебного искусственного интеллекта в постапокалиптическом будущем. Кайл Риз (Майкл Бин) - солдат, отправленный в прошлое, чтобы защитить Сару. Автор сценария - Кэмерон и Хёрд, а соавтор сценария - Уильям Вишер-младший получил зачёт за "дополнительный диалог".';
// block1.style.backgroundColor = 'red';
// block1.style.height = '100px';
//
// const block2 = document.createElement('div');
// block2.innerText = 'Кэмерон придумал сюжет фильма на основе лихорадочного сна, который он пережил во время выхода своего первого фильма Пиранья 2: Нерест (1982) в Риме, и разработал концепцию в сотрудничестве с Wisher. Он продал права на проект коллеге-выпускнице New World Pictures[англ.] Хёрд при условии, что она будет продюсировать фильм только в том случае, если он станет его режиссёром; в конечном итоге Херд заключил дистрибьюторский контракт с Orion Pictures, в то время как исполнительные продюсеры Джон Дейли[англ.] и Дерек Гибсон из Hemdale Film Corporation сыграли важную роль в организации финансирования и производства фильма.';
// block2.style.backgroundColor = 'yellow';
// block2.style.height = '150px';
//
// const block3 = document.createElement('div');
// block3.innerText = 'Первоначально Orion предложил Шварценеггеру роль Риза, но тот согласился сыграть заглавного персонажа после того, как подружился с Кэмероном. Съёмки, которые проходили в основном ночью на натуре в Лос-Анджелесе, были отложены из-за обязательств Шварценеггера перед Конаном разрушителем (1984), во время которых Кэмерон нашёл время поработать над сценариями Рэмбо: Первая кровь 2 (1985) и Чужие (1986). Спецэффекты фильма, включавшие миниатюры[англ.] и покадровую анимацию, были созданы командой художников во главе со Стэном Уинстоном и Джином Уорреном-младшим[англ.].';
// block3.style.backgroundColor = 'green';
// block3.style.height = '200px';
//
// if (block1.style.height > block2.style.height && block1.style.height > block3.style.height) {
//     block2.style.height = block1.style.height;
//     block3.style.height = block1.style.height;
// } else if (block2.style.height > block1.style.height && block2.style.height > block3.style.height ) {
//     block1.style.height = block2.style.height;
//     block3.style.height = block2.style.height;
// }else if (block3.style.height > block1.style.height && block3.style.height > block2.style.height) {
//     block1.style.height = block3.style.height;
//     block2.style.height = block3.style.height;
// }
// document.body.append(block1, block2, block3);
// console.log(document.body.children);


//     #wP0xXPc
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js
// (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок,
// блок розділити блоками, в яких будуть
// зберігатись значення окремих властивостей,
// для властивості modules зробити список
// з елементами
// Приклад структири знаходиться у файлі example.png
// який лежить в папці з поточним фйлом
// ------------------
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// for (const cours of coursesArray) {
//
//     const divForAll = document.createElement('div');
//     divForAll.classList.add('divForAll');
//     divForAll.style.border = '1px solid';
//
//     const h2ForAll = document.createElement('h2');
//     // h2ForAll.style.width = '50vw';
//     h2ForAll.innerText = `${cours.title}`;
//
//
//     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     const divForMonthAndHour = document.createElement('div');
//     divForMonthAndHour.style.display = 'flex';
//     divForMonthAndHour.style.justifyContent = 'centre';
//     divForMonthAndHour.style.alignItems = 'centre';
//     divForMonthAndHour.style.gap = '50px';
//
//     const pForMonth = document.createElement('p');
//     pForMonth.innerText = `${cours.monthDuration} months`;
//     pForMonth.style.height = '20px';
//     pForMonth.style.width = '50vw';
//     pForMonth.style.border = '3px solid green';
//
//     const pForHour = document.createElement('p');
//     pForHour.innerText = `${cours.hourDuration} hours`;
//     pForHour.style.height = '20px';
//     pForHour.style.width = '50vw';
//     pForHour.style.border = '3px solid yellow';
//
//     divForMonthAndHour.append(pForMonth, pForHour);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     const ulForModules = document.createElement('ul');
//
//     for (const module of cours.modules) {
//         const liForModule = document.createElement('li');
//         liForModule.innerText = module;
//         liForModule.classList.add('liForModule');
//         liForModule.style.border = '0.2px solid red';
//         ulForModules.appendChild(liForModule);
//     }
//
//     divForAll.append(h2ForAll, divForMonthAndHour, ulForModules);
//
//     document.body.appendChild(divForAll);
// }
// console.log(document.body.children)