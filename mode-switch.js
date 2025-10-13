document.addEventListener("DOMContentLoaded", () => {
  const day = document.getElementById("day-mode");
  const night = document.getElementById("night-mode");
  
  // 時間帯で自動切替（6時〜18時が昼）
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
    day.style.display = "grid";
    night.style.display = "none";
  } else {
    day.style.display = "none";
    night.style.display = "grid";
  }
});
