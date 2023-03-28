const fontSizeControl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", fontSize);

function fontSize(event) {
  text.style.fontSize = event.target.value + "px";
}
