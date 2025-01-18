document.getElementById("searchBar").addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const words = document.querySelectorAll("#wordList li");

  words.forEach(word => {
    const text = word.textContent.toLowerCase();
    if (text.includes(searchQuery)) {
      word.style.display = "block";
    } else {
      word.style.display = "none";
    }
  });
});

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Change the button text depending on the current mode
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Enable Light Mode";
  } else {
    darkModeToggle.textContent = "Enable Dark Mode";
  }
});
