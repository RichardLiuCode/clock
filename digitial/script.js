function updateClock() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  let twelveHours = urlSearchParams.get("12hours");
  let showSeconds = urlSearchParams.get("showSeconds");


  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  if (twelveHours == "true") {
    if (hours > 12) {
      hours = hours - 12;
      amOrpm = "P.M.";
    }
    var timeString = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0");

  } else {
    var timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    if (!document.getElementById("twelveAndTwentyFourHoursCheckbox").checked) {
      document.getElementById("twelveAndTwentyFourHoursCheckbox").checked = true;
    }
  }
  if (showSeconds == "true") {
    timeString += `:${seconds.toString().padStart(2, "0")}`;
    if (!document.getElementById("showSecondsCheckbox").checked) {
      document.getElementById("showSecondsCheckbox").checked = true;
    }
  }
  if (twelveHours == "true") {
    timeString += ` ${amOrpm}`;
  }
  document.title = timeString;
  document.getElementById("clock").textContent = timeString;
}

setInterval(function () {
  updateClock();
}, 100);
updateClock();

document.getElementById("twelveAndTwentyFourHoursCheckbox").addEventListener("change", function () {
  if (this.checked) {
    const url = new URL(window.location.href);
    url.searchParams.set("12hours", "false");
    window.history.replaceState({}, "", url);
  } else {
    const url = new URL(window.location.href);
    url.searchParams.set("12hours", "true");
    window.history.replaceState({}, "", url);

  }
});

document.getElementById("showSecondsCheckbox").addEventListener("change", function () {
  if (this.checked) {
    const url = new URL(window.location.href);
    url.searchParams.set("showSeconds", "true");
    window.history.replaceState({}, "", url);
  } else {
    const url = new URL(window.location.href);
    url.searchParams.set("showSeconds", "false");
    window.history.replaceState({}, "", url);

  }
});

window.addEventListener("load", function () {
  if (window.parent != window.self) {
    document.getElementsByClassName("topBar")[0].style.display = "none";
  }
});