let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector(".dark-mode-toggle");

//check if dark mode is enabled, turn on and off respectively 
const enableDarkMode = () =>{
    //add class darkmode to the body
    document.body.classList.add('darkmode');
    //update dark mode to local storage
    localStorage.setItem('darkMode','enabled');
};

const disableDarkMode = () =>{
    //add class darkmode to the body
    document.body.classList.remove('darkmode');
    //update dark mode to local storage
    localStorage.setItem('darkMode', null);
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
        console.log(darkMode);
    }
    else{
        disableDarkMode()
        console.log(darkMode);
    }
});

//https://codepen.io/kevinpowell/pen/EMdjOV 