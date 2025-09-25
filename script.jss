document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to My Portfolio";
  const element = document.getElementById("welcome-text");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // kecepatan ketik (ms)
    }
  }

  element.textContent = ""; // kosongkan dulu
  typeWriter();
});

document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.querySelector(".snow-container");

  function createSnow() {
    const snow = document.createElement("span");
    snow.classList.add("snowflake");

    // posisi horizontal acak
    snow.style.left = Math.random() * window.innerWidth + "px";

    // ukuran acak
    const size = Math.random() * 6 + 3;
    snow.style.width = size + "px";
    snow.style.height = size + "px";

    // warna custom acak
    const colors = [
      "rgba(255,255,255,0.9)",   // putih
      "rgba(173,216,230,0.9)",  // biru muda
      "rgba(255,182,193,0.9)"   // pink pastel
    ];
    snow.style.background = colors[Math.floor(Math.random() * colors.length)];

    // glowing efek
    snow.style.boxShadow = `0 0 8px ${snow.style.background}`;

    // durasi jatuh acak
    snow.style.animationDuration = Math.random() * 3 + 3 + "s";

    snowContainer.appendChild(snow);

    setTimeout(() => {
      snow.remove();
    }, 6000);
  }

  setInterval(createSnow, 150);
});
