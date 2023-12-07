export function updateWidths() {
  const skillsets = document.querySelectorAll("#tech-skills .years");
  for (const skillset of skillsets) {
    paintExperience(skillset);
  }
}

function paintExperience(node: Element) {
  const spans = node.querySelectorAll("span");
  const indicator = node.querySelector(".display-years") as HTMLDivElement;
  if (indicator) {
    const years = spans.length;
    let max: number | string = getComputedStyle(document.documentElement)
      .getPropertyValue("--max-years")
      .trim();
    max = max ? parseInt(max) : 0;
    const percentage = (Math.abs(years) / Math.abs(max)) * 100;
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
  const years = spans.length ?? 0;
  return years;
}
