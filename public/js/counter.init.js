// ----- COUNTER ----- //

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
