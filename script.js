
// Welcome message
console.log("Welcome to Ilakkiya's Portfolio!");

// Navigation active effect
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(item => {
            item.style.color = "white";
        });

        this.style.color = "#a78bfa";
    });
});

// Contact button message
const contactButton = document.querySelector("#home a");

contactButton.addEventListener("click", function() {
    console.log("Thanks for visiting my portfolio!");
});
