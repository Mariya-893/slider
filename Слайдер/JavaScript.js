document.addEventListener('DOMContentLoaded', () => {
  const slides = [
      'https://s3-alpha-sig.figma.com/img/84d2/4980/7f2a0f3b4ed9cd6671fa4e811b625992?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YChms7ftT--~n1ilaw2SYHtKo94tZGSiKFclowDqUIjthdodkuTk~jI13T5Q08AXahRbbXOrCpncFbjP4ikyW4l-6WSLmUcRA7jMEODdSzMPtcYM9EZpi2pCrvVPifllHX8rD-vgE~ZFxE88auPNxHVR~FV3kB15hcDA5cg7cersHMwulqjKwoTgAXswev6zBJmtzaMidtSE8tI8OYn97rfeolRpAjUOu9rWkrE8NVVE575Yjl7TyJDhzCOC78sS3hinvsCFfzkjvk6FodR5SxgtNJCDI07gkYRZCu3NrZG1Yd3Cuw2VMe~nrnuoyzeoOjJwZqbcZW-kuvaVnZ9oxw',
      'https://s3-alpha-sig.figma.com/img/2b61/d91d/0d504ae5ddf821a6b6600ee9bd6d98fa?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pX~gxd882iF5A4QNNVxuwKnQEqn6JdcnkFwVKoThe9F0bT63pQCTclgMqp4uZmDoy1KznGQ~2Eh7dhkhWbfb2784LjPiOdL2abkryK465~59IQt1MGv5F~rSctT9ethzy6nLnMuZQi4bXcnZp~BFIFULw~NwzIN9laMPeJr4PT3cJUU4LGovgikHvPYnYNSbHAvfgYlrWNJe6vUVrSwqE45XfQ6ks1tgG~AvNGJMPooI6sEVTj2d9HJ-l83pPUuT1fZGbLT3DGbkjRa72OBDmKC~~J80yWk83R6dy0p1uXF6pQAodF4md9RQZqnHhHwzjSRPSjBwvDRe3OKETY7rxw',
      'https://s3-alpha-sig.figma.com/img/2882/358d/e0332eab0ee26bbd0cebfe5592a469dc?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aF8O6w0xTlj0SF~MDXWzwlyGHswb1QlzlOe-p~Wr0EYN2ZSmoqiI~-ryUhor6S9wlGGs0Z787Xe2sxqS~fPXaA1JZ~h8jVlbnrCsrJ51hcBNGX~ShPdlSayuSxtUDWwPzKhrJxZqgrmLSSvdjTMf0mo-4POycyate922DbIOlPORZmPhH9EardesI9ONISmCjTBCmRgmtklaJ3PXGjw2m1C0M8H5jfn68nVBR9i0ud6vIcKGJyIRmKXrqirSX1kL9t2i2uhLkBzSphY~2UzbrRskajLgFr~YFrA5PDrGVHLTe2RNwIel~vEXJ7Nwk~LG0brFVG2XksxtC5L~0kk7ew'
  ];

  let currentSlide = 0;

  const imgContainer = document.querySelector('.slider_img');
  const leftArrow = document.querySelector('.slider_arrow.left');
  const rightArrow = document.querySelector('.slider_arrow.right');
  const balls = document.querySelectorAll('.ball');
  const links = document.querySelectorAll('.project ul li a'); // Получаем ссылки для навигации

  function updateSlide() {
      imgContainer.innerHTML = `<img src="${slides[currentSlide]}" alt="Slide ${currentSlide + 1}">`;
      balls.forEach((ball, index) => {
          ball.classList.toggle('active', index === currentSlide);
      });
      links.forEach((link, index) => {
          link.classList.toggle('active', index === currentSlide);
      });
  }

  leftArrow.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide();
  });

  rightArrow.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
  });

  balls.forEach((ball, index) => {
      ball.addEventListener('click', () => {
          currentSlide = index;
          updateSlide();
      });
  });

  links.forEach((link, index) => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // предотвращаем переход по ссылке
          currentSlide = index;
          updateSlide();
      });
  });

  updateSlide();
});
