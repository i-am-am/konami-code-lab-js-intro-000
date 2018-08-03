const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const input = document.querySelector('input')
input.addEventListener('keydown', function(e) {
  const key = e.which
})

function init(key) {
  let index = 0;
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
