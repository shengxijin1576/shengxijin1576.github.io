function renderSeminarMath() {
  if (typeof renderMathInElement !== "function") {
    return;
  }

  renderMathInElement(document.body, {
    delimiters: [
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    throwOnError: false,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderSeminarMath);
} else {
  renderSeminarMath();
}
