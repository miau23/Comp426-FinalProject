

let cocktail = [];

export async function getCocktails(){
    const result = await axios({
        method: 'get',
        url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    });
    cocktail = result;
    $('#root').empty();
    $('#root').append(`<p class = "drink-name"> ${cocktail.data.drinks[0].strDrink} </p>`);
    $('#root').append(`<button id="tell-me" class="tell-me">Tell Me More</button>`);
    $('#root').append(`<button id="different" class="different">Mmmm..give me a different one</button>`);
    return result;
};

export async function addMore(){
    $('#root').empty();
    $('#root').append(`<p class = "drink-name"> ${cocktail.data.drinks[0].strDrink}</p>`);
    const ing = cocktail.data.drinks[0]
    let temp;
    let temp2;
    $('#root').append(`<ol class = "list">`);
    for(let i = 1; i<16;i++){
        temp = "strIngredient" + i;
        temp2 = "strMeasure" + i;
        temp = ing[temp];
        temp2 = ing[temp2];
        if(temp !== null){
            $('#root').append(`<li> ${temp2} of ${temp} </li>`);
        }
    }
    $('#root').append(`</ol>`);
    $('#root').append(`<p class = "inst"> ${cocktail.data.drinks[0].strInstructions}</p>`);
    $('#root').append(`<button id="tell-me-l" class="tell-me-l">Tell Me Less</button>`);
    $('#root').append(`<button id="different" class="different">Mmmm..give me a different one</button>`);
}

export function addLess(){
    $('#root').empty();
    $('#root').append(`<p class = "drink-name"> ${cocktail.data.drinks[0].strDrink}</p>`);
    $('#root').append(`<button id="tell-me" class="tell-me">Tell Me More</button>`);
    $('#root').append(`<button id="different" class="different">Mmmm..give me a different one</button>`);
}


export function load(){
    getCocktails();
    $('#root').on("click",".tell-me",addMore);
    $('#root').on("click",".tell-me-l",addLess);
    $('#root').on("click",".different",getCocktails);
}

$(function() {
    load();
});