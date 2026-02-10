const toggle = document.getElementById("toggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
}; 
function openModal() {
  document.getElementById("projectModal").style.display = "flex";
};

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
};
