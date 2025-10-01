function updateClock() {
  const now = new Date();
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Add leading zero if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("time").textContent = currentTime;
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Run immediately