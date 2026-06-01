const hearts = document.getElementById("hearts");
const btn = document.getElementById("btn");

function renderHearts() {
  let text = "";

  for (let i = 0; i < 5; i++) {
    text += "❤️ 은지민 사랑해 ❤️<br>";
  }

  hearts.innerHTML = text;
}

btn.addEventListener("click", () => {
  renderHearts();
});

renderHearts();
