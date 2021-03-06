
let genre;

export async function getGenre(){
    const result = await axios({
        method: 'get',
        url: 'https://binaryjazz.us/wp-json/genrenator/v1/genre/',
    });
    genre = result;
    $('#root5').empty();
    $('#root5').append(`<p id= "genre"> ${genre.data} </p>`);
    $('#root5').append(`<a href="https://www.youtube.com/">go to Youtube to begin exploring this genre</a>`);
    $('#root5').append(`<br><button id="diff-genre" class="diff-genre">Show Me Another</button>`);
    return result;
};
export function load(){
    getGenre();
}
$(function() {
    load();
    $('#root5').on("click",".diff-genre",getGenre);
});