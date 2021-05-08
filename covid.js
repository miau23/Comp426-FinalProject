
let covid = [];
let x;
export async function getCovid(){
    const result = await axios({
        method: 'get',
        url: 'https://api.quarantine.country/api/v1/summary/latest',
    });
    covid = result;
    console.log(covid);
    $('#root7').empty();
    $('#root7').append(`<p class = "cases-total"> Total Cases World Wide: ${covid.data.data.change.total_cases} </p>`);
    $('#root7').append(`<button id="look-up-country" class="look-up-country">Look up cases for a specific country</button>`);
    return result;
};
function countryLookUp(){
    $('#root7').empty();
    $('#root7').append(` <input id="myInput" type="text" value="Country">
   `);
    $('#root7').append(`<button id="submit" class="submit">lookup</button>`);
}
function countryLookUperror(){
    $('#root7').empty();
    $('#root7').append(` <p> not a valid country please try again </p>
   `);
    $('#root7').append(` <input id="myInput" type="text" value="Country">
   `);
    $('#root7').append(`<button id="submit" class="submit">lookup</button>`);
}
export async function getCovidCountry(){
    x = document.getElementById("myInput").value;
    console.log(x);
    x = x.toLowerCase();
    const result = await axios({
        method: 'get',
        url: 'https://api.quarantine.country/api/v1/summary/latest',
    });
    covid = result;
    $('#root7').empty();
    let arr = covid.data.data.regions;
    if(arr[x] != null){
    $('#root7').append(`<p class = "cases-total"> There are ${arr[x].active_cases} active cases in ${arr[x].name}</p>`);
    $('#root7').append(`<button id="look-up-country" class="look-up-country">Look up cases for a specific country</button>`);
    }
    else{
        countryLookUperror();
    }
    return result;
}

export function load(){
    getCovid();
    $('#root7').on("click",".look-up-country",countryLookUp);
    $('#root7').on("click",".submit",getCovidCountry);
    //$('#root').on("click",".different",getCocktails);
}

$(function() {
    load();
});