const dropNavBtn = document.getElementById("btn");
const dropMenu = document.getElementById("desktop-nav");

const toggleDropdown = function() {
    dropMenu.classList.toggle("show");
};

function test() {
    console.log("Button pressed");
}

dropNavBtn.addEventListener("click", test);