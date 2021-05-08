import axios from 'axios';

let dog;

export async function getDog(){
    const result = await axios({
        method: 'get',
        url: 'https://dog.ceo/api/breeds/image/random',
    });
    dog = result;
    $('#root2').empty();
    console.log(dog.data.message);
    $('#root2').append(`<img src=${dog.data.message} alt="doggo" width="1000" height="1000">`);
    $('#root2').append(`<br><button id="diff-dog" class="diff-dog">Show Me Another</button>`);
    return result;
};
export function load(){
    getDog();
}
$(function() {
    load();
    $('#root2').on("click",".diff-dog",getDog);
});