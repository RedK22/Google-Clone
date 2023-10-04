document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.querySelector(".checkbox");
  let isLightMode = true; // Start with light mode

  toggleSwitch.addEventListener("change", function () {
    const body = document.querySelector("body");
    const navLinks = document.querySelectorAll(".nav-links");
    const signInButton = document.querySelector(".signin");
    const footer = document.querySelector("footer");
    const searchInput = document.querySelector(".search");
    const googleButton = document.querySelector(".google");
    const luckyButton = document.querySelector(".lucky");
    const image = document.querySelector(".image");

    body.classList.toggle("light");

    navLinks.forEach((link) => {
      link.classList.toggle("light");
    });

    signInButton.classList.toggle("light");
    footer.classList.toggle("light");
    searchInput.classList.toggle("light");
    googleButton.classList.toggle("light");
    luckyButton.classList.toggle("light");

    // Toggle flag and update image source accordingly
    isLightMode = !isLightMode;
    image.src = isLightMode ? "googlelogolight.png" : "googlelogodark.png";
  });
});

//

// document.addEventListener("DOMContentLoaded", function () {
//   // ... (your existing code)

//   // Add this event listener to the Google button
//   const googleButton = document.querySelector(".google");
//   googleButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//     const searchInput = document.getElementById("searchInput");
//     searchInput.value = ""; // Clear the input value
//   });

//   // Add this event listener to the "I'm Feeling Lucky" button
//   const luckyButton = document.querySelector(".lucky");
//   luckyButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the default form submission behavior
//     const searchInput = document.getElementById("searchInput");
//     searchInput.value = ""; // Clear the input value
//   });
// });

// Actual google search

document.addEventListener("DOMContentLoaded", function () {
  const googleButton = document.querySelector(".google");
  const luckyButton = document.querySelector(".lucky");

  googleButton.addEventListener("click", function (event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput !== "") {
      window.location.href = `https://www.google.com/search?q=${searchInput}`;
    }
  });

  luckyButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "https://www.google.com/doodles/";
  });
});

// Enter = Search

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const googleButton = document.querySelector(".google");
  const luckyButton = document.querySelector(".lucky");

  googleButton.addEventListener("click", function (event) {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query !== "") {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  });

  luckyButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "https://www.google.com/doodles/";
  });

  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      googleButton.click();
    }
  });
});
