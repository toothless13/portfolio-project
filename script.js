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

document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel-nav">
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