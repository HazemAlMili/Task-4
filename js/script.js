const paragraph = document.querySelector(".content p");

paragraph.addEventListener("click", () => {
  paragraph.contentEditable = true;
  paragraph.focus();
});

paragraph.addEventListener("blur", () => {
  paragraph.contentEditable = false;
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // You can add your logic here to handle the form data,
    // such as sending it to a server or displaying a success message.
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    // Optionally, you can reset the form
    document.getElementById("contactForm").reset();
  });
