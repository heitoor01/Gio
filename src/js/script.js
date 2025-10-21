// Step 1: Get the button
const toggleButton = document.getElementById("darkModeToggle");
const icon = document.getElementById("modeIcon");

// Step 2: Add a click listener to the button
toggleButton.addEventListener("click", () => {
  // Step 3: Toggle the "dark-mode" class on the body
  document.body.classList.toggle("dark-mode");

  // Swap the icon src based on mode
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "./src/images/sun.png";
    icon.alt = "modo claro";
  } else {
    icon.src = "./src/images/moon.png";
    icon.alt = "modo escuro";
  }
});
