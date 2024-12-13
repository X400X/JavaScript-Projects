function updateClock() {
    const now = new Date();
    let h = now.getHours();
    const mer = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    const m = now.getMinutes().toString().padStart(2, 0);
    const s = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${h}:${m}:${s} ${mer}`;
    document.getElementById("clock").textContent = timeString;


}

updateClock();
setInterval(updateClock, 1000)