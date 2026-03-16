const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dpr = window.devicePixelRatio;

canvas.width = window.innerWidth * dpr;
canvas.height = window.innerHeight * dpr;

canvas.style.width = window.innerWidth + "px";
canvas.style.height = window.innerHeight + "px";

ctx.scale(dpr, dpr);

let drawing = false;

function getCanvasPoint(e) {
  const rect = canvas.getBoundingClientRect();

  const x = (e.clientX - rect.left) * (canvas.width / rect.width);
  const y = (e.clientY - rect.top) * (canvas.height / rect.height);

  return { x, y };
}

canvas.addEventListener("pointerdown", e => {
  console.log("piszesz")
  //if (e.pointerType !== "pen") return; // ignoruj palec
  drawing = true;
  const p = getCanvasPoint(e);

  ctx.beginPath();
  ctx.moveTo(p.clientX, p.clientY);
  console.log("napisano")
});

canvas.addEventListener("pointermove", e => {
  if (!drawing) return;
  const p = getCanvasPoint(e);

  ctx.lineTo(p.clientX, p.clientY);
  ctx.stroke();
});

canvas.addEventListener("pointerup", () => {
  drawing = false;
});
canvas.addEventListener("pointerdown", e => {
  e.preventDefault();
});

canvas.addEventListener("pointermove", e => {
  e.preventDefault();
});
document.addEventListener("touchmove", e => {
  e.preventDefault();
}, { passive: false });

// TODO zaznaczanie i tak, zle dziala