// Set the target date
const targetDate = new Date("2024-12-31T23:59:59").getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft >= 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the respective HTML elements
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
  } else {
    // Countdown finished
    document.getElementById("timer").textContent = "Countdown Completed!";
    clearInterval(interval);
  }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);