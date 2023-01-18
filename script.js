const dropNavBtn = document.getElementById("btn");
const dropMenu = document.getElementById("desktop-nav");
const header = document.querySelector("header");
const main = document.querySelector("main");

const toggleDropdown = function() {
    dropMenu.classList.toggle("active");
    header.classList.toggle("active");
    main.classList.toggle("active");
    dropNavBtn.classList.toggle("active");
    console.log("toggleDropdown fired");
};

function dropNav (e) {
    // console.log("Button pressed");
    // console.log(dropNavBtn);
    // console.log(dropMenu);
    e.stopPropagation();
    toggleDropdown();
}

dropNavBtn.addEventListener("click", dropNav);

document.documentElement.addEventListener("click", () => {
    if (dropMenu.classList.contains("active")) {
        toggleDropdown();
    }
});

window.addEventListener("resize", function() {
    // update your variables
    const headerHeight = +header.offsetHeight;
    dropMenu.style.top = headerHeight + "px";
    main.style.top = headerHeight + "px";
    // console.log(main.style.top);
  });
  
// const headerHeight = +header.offsetHeight;
// dropMenu.style.top = headerHeight + "px";
// main.style.top = headerHeight + "px";
// console.log(dropMenu.style.top);