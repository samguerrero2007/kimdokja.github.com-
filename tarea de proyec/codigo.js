document.addEventListener("DOMContentLoaded", () => {
  const formSection = document.getElementById("formSection");
  const welcome = document.getElementById("welcome");
  const welcomeText = document.getElementById("welcomeText");
  const welcomeImg = document.getElementById("welcomeImg");
  const btnEnviar = document.getElementById("btnEnviar");

  btnEnviar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const genero = document.getElementById("genero").value;

    if (!nombre || !genero) {
      alert("Por favor ingresa tu nombre y género");
      return;
    }

    // Ocultar formulario y mostrar bienvenida
    formSection.classList.add("hidden");
    welcome.classList.remove("hidden");

    welcomeText.textContent = `¡Bienvenido/a ${nombre}!`;
    welcomeImg.src = genero === "femenino" ? "female.png" : "male.png";
  });
});
function contratar() {
  alert("You have hired Nekomiya Mana!");
}