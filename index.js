const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;

canvas.addEventListener("pointerdown", e => {
  if (e.pointerType !== "pen") return; // ignoruj palec
  drawing = true;

  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
});

canvas.addEventListener("pointermove", e => {
  if (!drawing) return;

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
});

canvas.addEventListener("pointerup", () => {
  drawing = false;
});