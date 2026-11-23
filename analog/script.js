setInterval(function () {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    document.getElementById("hourhand").style.transform = `rotateZ(${((hour % 12) / 12) * 360}deg)`;
    document.getElementById("minuteshand").style.transform = `rotateZ(${(minutes / 60) * 360}deg)`;
    document.getElementById("secondshand").style.transform = `rotateZ(${(seconds / 60) * 360}deg)`;

}, 250);