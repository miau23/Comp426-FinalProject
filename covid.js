
let covid = [];
let countries = ["afghanistan","albania","algeria","andorra","angola","anguilla","antigua_and_barbuda","argentina","armenia","aruba","australia","austria",
"bahamas","bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bermuda", "bhutan", "bolivia","bosnia_and_herzegovina","botswana","brazil","british_virgin_islands", "brunei","bulgaria","burkina_faso",
"cabo_verde", "cambodia", "cameroon", "canada", "5.	caribbean_netherlands", "cayman_islands", "central_african_republic", "channel_islands", "chile", "colombia","comoros", "congo","costa_rica", "croatia", "cuba", "cyprus", "czechia", 
"denmark", "diamond_princess", "djibouti", "dominica", "dominican_republic",
 "ecuador", "egypt", "el_salvador", "equatorial_guinea", "eritrea", "estonia", "ethiopia", 
 "faeroe_islands", "falkland_islands", "fiji", "finland", "france",
"gabon", "gambia", "germany", "ghana", " gibraltar", "greece", "greenland", "grenada", " guadeloupe", "guatemala", "guyana",
"haiti", "honduras", "hong_kong", "hungary",
"iceland", "india", "indonesia", "iran", "iraq", "ireland", "isle_of_man", "israel", "italy", 
"jamaica", "japan", "jordan", 
"kazakhstan", "kenya", "kuwait", "kyrgyzstan", 
"laos", "latvia", "liberia", "libya", "lithuania", "luxembourg",
"macao", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mexico", "moldova", "monaco", "mongolia", "morocco", 
"namibia", "nepal", "netherlands", "new_zealand", "nicaragua", "niger", "nigeria", "norway", "oman",
"pakistan", "palestine", "panama", "paraquay", "peru", "poland", "philippines", "portugal", "qatar", "reunion", "romania", "russia", "rwanda", "samoa",
"senegal", "sierra_leone", "singapore", "slovakia", "slovenia", "somalia", "south_africa", "south_korea", "spain", "sri_lanka", "sudan", "syria", "switzerland", "taiwan"
, "tajikstan", "tanzania", "togo", "thailand", "turkey", "turks_and_caicos"];
let x;
export async function getCovid(){
    const result = await axios({
        method: 'get',
        url: 'https://api.quarantine.country/api/v1/summary/latest',
    });
    covid = result;
    $('#root7').empty();
    $('#root7').append(`<p class = "cases-total"> Total Cases World Wide: ${covid.data.data.change.total_cases} </p>`);
    $('#root7').append(`<button id="look-up-country" class="look-up-country">Look up cases for a specific country</button>`);
    return result;
};
function countryLookUp(){
    $('#root7').empty();
    $('#root7').append(` <input id="myInput" type="text" value="Country">
   `);
    $('#root7').append(`<button id="auto" class="auto">help</button>`);
    $('#root7').append(`<button id="submit" class="submit">lookup</button>`);
}
function autocomplete(){
    x = document.getElementById("myInput").value;
    x = x.toLowerCase();
    let string = "try: "
    for(let i = 0; i<countries.length; i++){
        if(x === countries[i].substr(0,x.length)){
            string = string + countries[i] + ", "
        }
    }
    $('#help').empty();
    $('#help').append(` <p> ${string} </p>`);
}
function countryLookUperror(){
    $('#root7').empty();
    $('#root7').append(` <p> not a valid country please try again </p>
   `);
    $('#root7').append(` <input id="myInput" type="text" value="Country">
   `);
    $('#root7').append(`<button id="auto" class="auto">help</button>`);
    $('#root7').append(`<button id="submit" class="submit">lookup</button>`);
}
export async function getCovidCountry(){
    x = document.getElementById("myInput").value;
    const result = await axios({
        method: 'get',
        url: 'https://api.quarantine.country/api/v1/summary/latest',
    });
    covid = result;
    $('#help').empty();
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
    $('#root7').on("click",".auto",autocomplete);
    //$('#root').on("click",".different",getCocktails);
}

$(function() {
    load();
});

