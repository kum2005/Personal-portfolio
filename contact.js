document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // You can implement email sending functionality here, or show a success message.
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Clear the form
  this.reset();
});