const snowFalling = () => {
  const canvas = document.getElementById("snow_canvas");
  const ctx = canvas.getContext("2d");

  const W = 1000; //영역 넓이
  const H = 500; //영역 높이
  canvas.width = W;
  canvas.height = H;

  const mp = 20; //밀도 수치
  const particles = [];
  for (let i = 0; i < mp; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 1, //입자 크기 최대치 조절
      d: Math.random() * mp, //밀도
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; //눈 입자 색깔
    ctx.beginPath();
    for (let i = 0; i < mp; i++) {
      const p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    update();
  }

  let angle = 0;
  function update() {
    angle = 0;
    for (let i = 0; i < mp; i++) {
      const p = particles[i];
      p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
      p.x += Math.sin(angle);

      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (i % 3 > 0) {
          particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
        } else {
          if (Math.sin(angle) > 0) {
            particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
          } else {
            particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
          }
        }
      }
    }
  }

  setInterval(draw, 33);
};

export default snowFalling;
