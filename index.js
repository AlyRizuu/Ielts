document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const openButton = document.querySelector(".open");
    const closeButton = document.querySelector(".close");

    // Function to toggle the display of the hamburger menu
    const toggleHamburger = () => {
        hamburger.style.display = hamburger.style.display === "flex" ? "none" : "flex";
    hamburger.style.position = "fixed";
    };

    // Event listeners for opening and closing the hamburger menu
    openButton.addEventListener("click", toggleHamburger);
    closeButton.addEventListener("click", toggleHamburger);
});


document.addEventListener('DOMContentLoaded', function() {
    const emptyAnchorTags = document.querySelectorAll('a[href=""]');
  
    emptyAnchorTags.forEach(function(anchorTag) {
      anchorTag.href = '#';
    });
  });