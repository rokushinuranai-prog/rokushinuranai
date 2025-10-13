document.addEventListener("DOMContentLoaded", () => {
  const day = document.querySelector(".hero--day");
  const night = document.querySelector(".hero--night");
  const btn = document.getElementById("mode-switch");

  // 初期状態は Day
  document.body.classList.add("day");
  day.style.display = "flex";
  night.style.display = "none";
  btn.textContent = "Day / Night";

  const show = (mode) => {
    if (mode === "day") {
      day.style.display = "flex";
      night.style.display = "none";
      document.body.classList.remove("night");
      document.body.classList.add("day");
    } else {
      day.style.display = "none";
      night.style.display = "flex";
      document.body.classList.remove("day");
      document.body.classList.add("night");
    }
  };

  btn.addEventListener("click", () => {
    const isDayVisible = day.style.display !== "none";
    show(isDayVisible ? "night" : "day");
  });
});
