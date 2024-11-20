let countdownInterval;
function startCountdown() {
  const minutesInput = document.getElementById('minutes').value;
  const totalSeconds = parseInt(minutesInput) * 60;
  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert('Vui lòng nhập số phút hợp lệ!');
    return;
  }
  clearInterval(countdownInterval);
  let remainingTime = totalSeconds;
  function updateCountdown() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById('countdown').textContent =`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (remainingTime > 0) {
      remainingTime--;
    } else {
      clearInterval(countdownInterval);
      alert('Đếm ngược đã kết thúc!');
    }
  }
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}
function stopCountdown() {
    clearInterval(countdownInterval); 
    alert('Đã dừng');
  }