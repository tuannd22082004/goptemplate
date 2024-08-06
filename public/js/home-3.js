function initMouseHoverEffect(containerId, innerId) {
  const container = document.getElementById(containerId);
  const inner = document.getElementById(innerId);

  const mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition(event) {
      const e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = e.clientY - this._y;
    },
    setOrigin(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
  };

  mouse.setOrigin(container);

  let counter = 0;
  const refreshRate = 10;
  const isTimeToUpdate = () => counter++ % refreshRate === 0;

  const updateTransformStyle = (x, y) => {
    const style = `rotateX(${x}deg) rotateY(${y}deg)`;
    Object.assign(inner.style, {
      transform: style,
      webkitTransform: style,
      mozTransform: style,
      msTransform: style,
      oTransform: style,
    });
  };

  const update = (event) => {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 5).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  container.onmousemove = (event) => isTimeToUpdate() && update(event);
  container.onmouseleave = () => (inner.style = "");
  container.onmouseenter = (event) => update(event);
}
initMouseHoverEffect("features-primary", "inner-primary");
initMouseHoverEffect("features-secondary", "inner-secondary");
function initSwipers() {
  new Swiper(".brands__swiper", {
    loop: true,
    slidesPerView: "auto",
    paginationClickable: true,
    spaceBetween: 20,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      1920: { slidesPerView: 7, spaceBetween: 50 },
      1028: { slidesPerView: 5, spaceBetween: 30 },
      768: { slidesPerView: 3, spaceBetween: 10 },
    },
  });

  new Swiper(".testimonial__swiper", {
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 20,
    pagination: ".swiper-pagination",
    slidesPerView: "auto",
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1500,
    breakpoints: {
      1920: { slidesPerView: 3, spaceBetween: 50 },
      1028: { slidesPerView: 2, spaceBetween: 30 },
      768: { slidesPerView: 1, spaceBetween: 10 },
    },
  });
}
initSwipers();


function applyParallax(selectors) {
  selectors.forEach(selector => {
    const elem = document.querySelector(selector);
    if (!elem) {
      console.error(`Phần tử ${selector} không tồn tại trong DOM.`);
      return;
    }

    document.addEventListener("mousemove", function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      elem.style.backgroundPosition = x;
    });
  });
}
applyParallax([".banner__round", ".cta", ".subscribe"]);


const counter = document.querySelectorAll(".counter__title");
const speed = 35; // The lower the slower
counter.forEach((counter__title) => {
  const updateCount = () => {
    const target = +counter__title.getAttribute("data-bs-target");
    const count = +counter__title.innerText;
    const inc = target / speed;
    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter__title
      counter__title.innerText = (count + inc).toFixed(0);
      // Call function every ms
      setTimeout(updateCount, 5);
    } else {
      counter__title.innerText = target;
    }
  };
  updateCount();
});