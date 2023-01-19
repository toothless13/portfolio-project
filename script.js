// Dropdown Responsive Navbar
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

const headerHeight = +header.offsetHeight;
dropMenu.style.top = headerHeight + "px";
main.style.top = headerHeight + "px";

window.addEventListener("resize", function() {
    // update your variables
    const headerHeight = +header.offsetHeight;
    dropMenu.style.top = headerHeight + "px";
    main.style.top = headerHeight + "px";
    // console.log(main.style.top);
  });


// Projects carousel  
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel-nav" id="carousel-nav">
            ${buttonsHtml.join("")}
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel-button");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            //Un-select all the items
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(button => button.classList.remove("carousel-button-selected"));

            //Select the correct item based on index
            items[index].classList.add("carousel-item-selected");
            button.classList.add("carousel-button-selected");
        });
    });
    // Pre-select the first element of the items array and first button
    items[0].classList.add("carousel-item-selected");
    buttons[0].classList.add("carousel-button-selected");
});
// Store the carousel-nav div in a variable
const carouselNav = document.getElementById("carousel-nav");
// Function to check screen width and hide or show carousel nav based on this
const checkScreenWidth = () => {
    let screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth <= 768) {
        console.log(screenWidth);
        console.log("if test");
        carouselNav.style.display = "none";
    } else {
        console.log(screenWidth);
        console.log("else test");
        carouselNav.style.display = "flex";
    }
}
// Call screen width function to set page intially
checkScreenWidth();
// Check screen width on resize event and call checkScreenWidth to ensure carousel nav is shown when needed
window.addEventListener("resize", checkScreenWidth);

//Figure out how to add transitions
// Make sure the project flex sections are all the same height
// Have text next to image for each project flex
// Think about centring main headings