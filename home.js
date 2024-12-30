document.getElementById("insert-image").addEventListener("click", function () {
    const image = document.getElementById("image");
    const newSrc = prompt("Enter the URL of the new image:");
    if (newSrc) {
      image.src = newSrc;
    }
  });
  document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
  });
  