document.addEventListener('DOMContentLoaded', () => {
    //  The function to get current UTC time and day
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = days[now.getUTCDay()];

        document.getElementById('current-time').textContent = utcTime;
        document.getElementById('current-day').textContent = currentDay;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 6000); // this will allow it to update every second
});
