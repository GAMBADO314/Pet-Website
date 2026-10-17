const viewButtons = document.querySelectorAll(".view-product");

const productModal = document.querySelector("#productModal");
const modalClose = document.querySelector("#modalClose");

const modalImage = document.querySelector("#modalImage");
const modalName = document.querySelector("#modalName");
const modalDescription = document.querySelector("#modalDescription");
const modalPrice = document.querySelector("#modalPrice");

viewButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const card = button.closest(".card");

        const image = card.querySelector("img");
        const name = card.querySelector("h3");
        const description = card.querySelector("p:not(.price)");
        const price = card.querySelector(".price");

        modalImage.src = image.src;
        modalImage.alt = image.alt;

        modalName.textContent = name.textContent;
        modalDescription.textContent = description.textContent;
        modalPrice.textContent = price.textContent;

        productModal.classList.add("show");
    });
});

modalClose.addEventListener("click", function() {
    productModal.classList.remove("show");
});

productModal.addEventListener("click", function(event) {
    if (event.target === productModal) {
        productModal.classList.remove("show");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && productModal.classList.contains("show")) {
        productModal.classList.remove("show");
    }
});
