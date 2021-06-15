// let activeElement = 0;
// const timeChange = 6000;

// const userImg = document.querySelector('.container__img');
// const h3Html = document.querySelector('.container__title');
// const pHtml = document.querySelector('.container__info');

// const colorImages = ['IMG/x.jpg', 'IMG/y.jpg', 'IMG/z.jpg'];
// const names = ['Firma X', 'Firma Y', 'Firma Z',];
// const opinions = ['Wywodząca sie z X specjalizuje się w produkcji nowoczesnych paneli winylowych, które dzięki wytrzymałości i łatwości montażu zdobywają coraz większe uznanie.', 'Firma Y posiada kilkudziesięcioletnią tradycję w produkcji parkietów i podłóg drewnianych. Jej produkty mimo upływu lat cieszą się dużym zainteresowaniem klientów', 'Firma o międzynarodowym zasięgu, która specjalizuje się w produkcji ekskluzywnych podłóg. Solidne wykonanie i liczna kolekcja wzorów zadowoli gusta najbardziej wymagających klientów'];

// function changeElement() {
//     activeElement++;
//     if (activeElement == colorImages.length) {
//         activeElement = 0;
//     }
//     userImg.src = colorImages[activeElement];
//     h3Html.textContent = names[activeElement];
//     pHtml.textContent = opinions[activeElement];

// }

// setInterval(changeElement, timeChange)

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
