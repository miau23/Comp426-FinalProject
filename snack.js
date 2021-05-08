
let food;
//let category = "Beef"
function getCategories(){
    $('#root8').empty();
    $('#root8').append(`<div id = "buttons-line>`);
    $('#root8').append(`<button id="Beef" class="Beef">Beef</button>`);
    $('#root8').append(`<button id="Breakfast" class="Breakfast">Breakfast</button>`);
    $('#root8').append(`<button id="Chicken" class="Chicken">Chicken</button>`);
    $('#root8').append(`<button id="Dessert" class="Dessert">Dessert</button>`);
    $('#root8').append(`<button id="Pasta" class="Pasta">Pasta</button>`);
    $('#root8').append(`<button id="Vegan" class="Vegan">Vegan</button>`);
    $('#root8').append(`</div>`);
}
export async function getFood(event){
    let url = "https://themealdb.com/api/json/v1/1/filter.php?c=" + event.target.id;
    const result = await axios({
        method: 'get',
        url: url,
    });
    food = result;
    console.log(food);
    $('#root8').empty();
    for(let i = 0; i< food.data.meals.length; i++){
        $('#root8').append(`<p> ${food.data.meals[i].strMeal} </p>`)
        $('#root8').append(`<img src= ${food.data.meals[i].strMealThumb} width = "200" height = "200" > `);
    }
    $('#root8').append(`<br><button id="back" class="back">Different Category</button>`);
    return result;
};

export function load(){
    getCategories();
   $('#root8').on("click",".Beef",getFood);
    $('#root8').on("click",".Breakfast",getFood);
    $('#root8').on("click",".Chicken",getFood);
    $('#root8').on("click",".Dessert",getFood);
    $('#root8').on("click",".Pasta",getFood);
    $('#root8').on("click",".Vegan",getFood);
    $('#root8').on("click",".back" ,getCategories)

}
$(function() {
    load();
});