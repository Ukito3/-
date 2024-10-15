function countdownTimer(endDate) {
    const countdownElement = document.getElementById('countdown');
  
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = endDate - now;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        countdownElement.innerHTML = "Time's up!";
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
    }, 1000);
  }
  
  document.getElementById('startBtn').addEventListener('click', function() {
    const dateInput = document.getElementById('dateInput').value;
    const endDate = new Date(dateInput).getTime();
    
    if (isNaN(endDate)) {
      alert('Please enter a valid date and time!');
    } else {
      countdownTimer(endDate);
    }
  });
  