document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("rain");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const raindrops = [];
  const numberOfDrops = 500;

  for (let i = 0; i < numberOfDrops; i++) {
    raindrops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 10 + 4,
    });
  }

  function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(174,194,224,0.4)";
    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    raindrops.forEach((drop) => {
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      ctx.stroke();
    });

    updateRain();
    requestAnimationFrame(drawRain);
  }

  function updateRain() {
    raindrops.forEach((drop) => {
      drop.y += drop.speed;
      if (drop.y > canvas.height) {
        drop.y = -drop.length;
        drop.x = Math.random() * canvas.width;
      }
    });
  }

  drawRain();
});
