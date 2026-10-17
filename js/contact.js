const contactForm = document.querySelector("#contactForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.classList.remove("error", "success");

    if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        messageInput.value.trim() === ""
    ) {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.classList.add("error");
        return;
    }

    if (!emailInput.value.includes("@")) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.classList.add("error");
        return;
    }

   formMessage.textContent = "Message looks good!";
formMessage.classList.add("success");

contactForm.reset();
});