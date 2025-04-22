let container = document.querySelector(".content");
let sectionEl = document.createElement("section");
let headingEl = document.createElement("h1");
let paraEl = document.createElement("p");

const sectionData = Array(24)
  .fill()
  .map((_, index) => ({
    title: `Title ${index + 1}`,
    para: `This is paragraph number ${
      index + 1
    }. Here is some motivational dummy content to fill up space.`,
  }));

// Loop and create DOM elements
sectionData.forEach((item) => {
  let sectionEl = document.createElement("section");
  sectionEl.style.marginBottom = "20px";

  let headingEl = document.createElement("h1");
  headingEl.innerText = item.title;

  let paraEl = document.createElement("p");
  paraEl.innerText = `${item.para} Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non molestiae deleniti necessitatibus, quibusdam rem cum.`;

  sectionEl.appendChild(headingEl);
  sectionEl.appendChild(paraEl);

  container.appendChild(sectionEl);
});

const progressBar = document.querySelector(".progress");

window.addEventListener("scroll", () => {
  // Total height scrolled from the top
  const scrollTop = document.documentElement.scrollTop;

  // Total scrollable height (document height - viewport height)
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calculate the percentage scrolled
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Update the progress bar width
  progressBar.style.width = `${scrollPercent}%`;
});