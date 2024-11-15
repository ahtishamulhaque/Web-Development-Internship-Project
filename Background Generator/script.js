const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");
const cssOutput = document.getElementById("cssOutput");
const body = document.body;
const copyButton = document.getElementById("copy");

function setGradient() {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  body.style.background = gradient;
  cssOutput.value = `background: ${gradient};`;
}

function copyCSS() {
  cssOutput.select();
  document.execCommand("copy");
  alert("CSS copied to clipboard!");
}

// Event Listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
direction.addEventListener("change", setGradient);
copyButton.addEventListener("click", copyCSS);

// Initialize
setGradient();
