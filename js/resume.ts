import "../css/resume.css";
import { addNumbers, updateWidths } from "./calc";
document.onreadystatechange = function () {
  // get path as we only want to run this on the resume page
  const path = window.location.pathname;

  if (document.readyState === "complete" && path.includes("/resume")) {
    updateWidths();
    addNumbers();
  }
};
