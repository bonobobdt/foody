

const modalOverlay = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
const modalRecipe = document.querySelector('.recipe-card');

for (let card of cards) {
    card.addEventListener('click', function(){
        
        const recipeContent = card.innerHTML

        const aFechar = document.createElement('a');
        const fechar = document.createTextNode("Fechar")

        const div = document.createElement('div');
        
        modalRecipe.innerHTML = recipeContent;

        aFechar.appendChild(fechar);
        aFechar.classList.add('close-modal')

        div.appendChild(aFechar);
        div.classList.add('exit-container');

        modalRecipe.appendChild(div);

        document.querySelector('.close-modal').addEventListener('click', function(){
            modalOverlay.classList.remove('active');
        })

        modalOverlay.classList.add('active');

    });
}








// const modalOverlay = document.querySelector('.modal');
// const cards = document.querySelectorAll('.card');


// for (let card of cards){


//     const recipeName = document.querySelectorAll('.card-info h3');
//     const recipeAuthor = document.querySelector('.card-info h4');

//     const modalRecipeName = document.querySelectorAll('.recipe-content h1');
//     const modalRecipeAuthor = document.querySelector('.recipe-content h2');






//         for (let name of recipeName) {
            
//             const recipeId = name.getAttribute("id");

//             for(let modalName of modalRecipeName) {

//                 card.addEventListener('click', function(){

//                     if (recipeId == name.textContent) {
//                         console.log(recipeId)
//                         console.log(name.textContent)  
    
//                         modalName.innerHTML = recipeId;
//                     }
    
//                     modalOverlay.classList.add('active');
    
//                 })  

//             }
            

    
//         }
    
// }