
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "アァイィウエェカガキギクグケコゴサザシジスズセソゾタチッツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン".split("");
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({length: columns}, () => 1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

document.getElementById('red').onclick = document.getElementById('blue').onclick = () => {
  document.getElementById('intro').style.display = 'none';
  canvas.style.display = 'block';
  document.documentElement.requestFullscreen?.();
  document.getElementById('matrix-sound').play();
  setInterval(drawMatrix, 50);
};
