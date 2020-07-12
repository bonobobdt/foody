
const receitas = document.querySelectorAll('.card');

for (let i = 0; i < receitas.length; i++) {
    receitas[i].addEventListener('click', function() {
        window.location.href = `/recipes/${i}`
    })
}

const hideShowButton = document.querySelectorAll('.button')
const recipeInfo = document.querySelectorAll('.hide-show')

for(let i = 0; i < hideShowButton.length; i++) {
    hideShowButton[i].addEventListener('click', function(){
        if (recipeInfo[i].classList.contains('hidden')) {
            recipeInfo[i].classList.remove('hidden');
            hideShowButton[i].textContent = "ESCONDER";
        } else {
            recipeInfo[i].classList.add('hidden')
            hideShowButton[i].textContent = "MOSTRAR"
        }
    });
}

console.log (hideShowButton);
console.log(recipeInfo);



// const modalOverlay = document.querySelector('.modal');
// const cards = document.querySelectorAll('.card');
// const modalRecipe = document.querySelector('.recipe-card');

// for (let card of cards) {
//     card.addEventListener('click', function(){
        
//         const recipeContent = card.innerHTML

//         const aFechar = document.createElement('a');
//         const fechar = document.createTextNode("Fechar")

//         const div = document.createElement('div');
        
//         modalRecipe.innerHTML = recipeContent;

//         aFechar.appendChild(fechar);
//         aFechar.classList.add('close-modal')

//         div.appendChild(aFechar);
//         div.classList.add('exit-container');

//         modalRecipe.appendChild(div);

//         document.querySelector('.close-modal').addEventListener('click', function(){
//             modalOverlay.classList.remove('active');
//         })

//         modalOverlay.classList.add('active');

//     });
// }




