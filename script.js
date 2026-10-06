const weekNumber = document.querySelector("#week-number");

function getIsoWeek(date) {
  const thursday = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const weekday = thursday.getUTCDay() || 7;
  thursday.setUTCDate(thursday.getUTCDate() + 4 - weekday);

  const yearStart = Date.UTC(thursday.getUTCFullYear(), 0, 1);
  return Math.ceil(((thursday.getTime() - yearStart) / 86_400_000 + 1) / 7);
}

function updateWeekNumber() {
  weekNumber.value = String(getIsoWeek(new Date())).padStart(2, "0");
}

updateWeekNumber();
setInterval(updateWeekNumber, 60_000);
