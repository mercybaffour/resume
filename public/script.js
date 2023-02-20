//Hamburger Menu Selection
const openNavMenu = document.querySelector('.menu-bar button');
const closeNavMenu = document.querySelector('.close-nav button');
const navbar = document.querySelector('.navbar');

//Slider Selection
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

//Adding responsive nav menu toggle functionality
function toggleNavMenu(){
    navbar.classList.toggle('show');
}

openNavMenu.addEventListener("click", toggleNavMenu);
closeNavMenu.addEventListener("click", toggleNavMenu);

//Adding Slider Functionality
nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

//GET API REQUEST
async function getVisits() {
    try {
        let response = await fetch('https://5exwtt2sz1.execute-api.us-east-1.amazonaws.com/Prod/count');
        let data = await response.json();
        console.log(data);
        document.querySelector("#visits").innerHTML = data['visitorCount'];
        return data;
    } catch (err) {
        console.error(err);
    }
}

getVisits();




