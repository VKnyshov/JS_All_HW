// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про
// всі корзини.
// Відобразити всі поля кожної корзини.
//
// fetch('https://dummyjson.com/carts')
//     .then(response => response.json())
//     .then(baskets => {
//         console.log(baskets);
//         const {carts} = baskets;
//         console.log(carts);
//
//         for (const cart of carts) {
//             const div = document.createElement('div');
//             div.classList.add('divClass');
//             const nameBasket = document.createElement('p');
//             nameBasket.innerText = `Number of Basket: ${cart.id}, Total Products: ${cart.totalProducts}`;
//
//             const productInBasket = document.createElement('div');
//
//             for (const oneProduct of cart.products) {
//
//                 const allPR = document.createElement('ul');
//                 productInBasket.appendChild(allPR);
//
//                 const onePr = document.createElement('li');
//                 onePr.innerText = oneProduct.title;
//                 onePr.style.color = 'yellow';
//                 allPR.appendChild(onePr);
//             }
//
//             div.append(nameBasket, productInBasket);
//             document.body.appendChild(div);
//         }
//         console.log(document.body.children)
//     });
//

//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
//     Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(recArr => {
        // console.log(recArr);
        const {recipes} = recArr;
        // console.log(recipes);
        for (const recipe of recipes) {
            console.log(recipe)
            const divRecipe = document.createElement('div');
            divRecipe.style.width = '700px';
            divRecipe.style.height = '1000px';

            divRecipe.style.border = '1px solid black';
            divRecipe.style.padding = '20px';






            const h2Name = document.createElement('h2');
            h2Name.innerText = `${recipe.id}. ${recipe.name}`
            h2Name.style.padding = '10px';
            ////////////////////////////////////////////////////////// додамо ще один дів для характеристик

            const divHar = document.createElement('div');
            divHar.style.display = 'flex';
            divHar.style.gap = '20px';
            divHar.style.justifyContent = 'centre';
            divHar.style.alignItems = 'centre';


            const divHarText = document.createElement('div');
            divHarText.style.padding = '10px';

            const caloriesPerServing = document.createElement('p');
            caloriesPerServing.innerText = `Calories Per Serving: ${recipe.caloriesPerServing}`


            const img = document.createElement('img');
            img.src = recipe.image;
            img.style.width = '400px';
            img.style.height = '400px';
            img.style.paddingLeft = '20px';



            const cookTimeMinutes = document.createElement('p');
            cookTimeMinutes.innerText = `Cook Time Minutes: ${recipe.cookTimeMinutes}`

            const cuisine = document.createElement('p');
            cuisine.innerText = `Cuisine: ${recipe.cuisine}`


            const difficulty = document.createElement('p');
            difficulty.innerText = `Difficulty: ${recipe.difficulty}`


            const mealType = document.createElement('p');
            cookTimeMinutes.innerText = `Meal Type: ${recipe.mealType}`


            const prepTimeMinutes = document.createElement('p');
            prepTimeMinutes.innerText = `Prep Time Minutes: ${recipe.prepTimeMinutes}`

            const rating = document.createElement('p');
            rating.innerText = `Rating: ${recipe.rating}`


            const reviewCount = document.createElement('p');
            reviewCount.innerText = `Review Count: ${recipe.reviewCount}`


            const servings = document.createElement('p');
            servings.innerText = `Servings: ${recipe.servings}`


            const userId = document.createElement('p');
            userId.innerText = `User Id: ${recipe.userId}`

            ///////////////////////////////////////дів зі списком інгридієнтів/////////////////////////////////////////////////////////////////////
            const divUlIngredients = document.createElement('div');

            const pForUlIngredients = document.createElement('p');
            pForUlIngredients.innerText = 'List of ingredients:';


            const ulIngredients = document.createElement('ul');
            ulIngredients.style.fontStyle = 'italic';

            for (const oneIngredient of recipe.ingredients) {
                const liIngredients = document.createElement('li');
                liIngredients.innerText = oneIngredient;
                ulIngredients.appendChild(liIngredients)
                divUlIngredients.append(pForUlIngredients, ulIngredients);
            }


            const ulInstructions = document.createElement('ol');

            const cookingMethod = document.createElement('h3');
            cookingMethod.innerText = `Cooking method: `


            for (const oneInstruction of recipe.instructions) {
                const liInstructions = document.createElement('li');
                liInstructions.innerText = oneInstruction;

                ulInstructions.appendChild(liInstructions)
                divUlIngredients.append(pForUlIngredients, ulIngredients);
            }

            const ulTagS = document.createElement('ul');
                // ulTagS.innerText = `Tags:`
            ulTagS.style.display = 'flex'
            for (const oneTag of recipe.tags) {
               const liTags = document.createElement('li');
                liTags.innerText = `- ${oneTag} -`;
                liTags.style.listStyleType = 'none'
                liTags.style.color = 'gray'
               ulTagS.appendChild(liTags)
            }


            divHarText.append(caloriesPerServing, cookTimeMinutes, cuisine, difficulty, mealType, prepTimeMinutes,
                rating, reviewCount, servings, userId, divUlIngredients)
            divHar.append(img, divHarText)
            divRecipe.append(h2Name, divHar,cookingMethod, ulInstructions, ulTagS )

            document.body.appendChild(divRecipe);


        }
    });