document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    updateWidths();
    addNumbers();
  }
};

function updateWidths() {
  const skillsets = document.querySelectorAll("#tech-skills .years");
  for (skillset of skillsets) {
    paintExperience(skillset);
  }
}

function paintExperience(node) {
  const spans = node.querySelectorAll("span");
  console.log();
  const indicator = node.querySelector(".display-years");
  if (indicator) {
    const years = spans.length;
    let max = getComputedStyle(document.documentElement)
      .getPropertyValue("--max-years")
      .trim();
    max = max ? parseInt(max) : 0;
    const percentage = (Math.abs(years) / Math.abs(max)) * 100;
    indicator.style.width = `${percentage}%`;
  }
}

function addNumbers() {
  const lines = document.querySelectorAll("#skills-grid li");
  for (line of lines) {
    const years = getLineYears(line);
    const left = line.querySelector(".exp-left");
    if (left) {
      const right = document.createElement("p");
      right.classList.add("exp-right");
      right.innerHTML = years;
      line.appendChild(right);
    }
  }
}

function getLineYears(node) {
  const spans = node.querySelectorAll(".years span.year");
  const years = spans.length ?? 0;
  return years;
}
