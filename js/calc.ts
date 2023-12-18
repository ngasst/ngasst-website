export function updateWidths() {
  const skillsets = document.querySelectorAll("#tech-skills .years");
  for (const skillset of skillsets) {
    paintExperience(skillset);
  }
}

function paintExperience(node: Element) {
  const indicator = node.querySelector(".display-years") as HTMLDivElement;
  if (indicator) {
    let years = getLineYears(
      node.parentElement?.parentElement as HTMLLIElement,
    );
    let max: number | string = getComputedStyle(document.documentElement)
      .getPropertyValue("--max-years")
      .trim();
    max = max ? parseInt(max) : 12;
    years = years > max ? max : years;
    let percentage = (Math.abs(years) / Math.abs(max)) * 100;
    percentage = Math.ceil(percentage);
    console.log(percentage);
    indicator.style.width = `${percentage}%`;
  }
}

export function addNumbers() {
  const lines = document.querySelectorAll(
    "#skills-grid li",
  ) as NodeListOf<HTMLLIElement>;
  for (const line of lines) {
    const years = getLineYears(line);
    const left = line.querySelector(".exp-left");
    if (left) {
      const right = document.createElement("p") as HTMLParagraphElement;
      right.classList.add("exp-right");
      right.innerHTML = `${years}`;
      line.appendChild(right);
    }
  }
}

function getLineYears(node: HTMLLIElement) {
  const spans = node.querySelectorAll(".years span.year");
  const num = node.querySelector(".years .year-count") as HTMLElement;
  let value = 0;
  if (num) {
    value = parseInt(num.innerHTML);
  } else {
    value = spans.length;
  }

  return value;
}
