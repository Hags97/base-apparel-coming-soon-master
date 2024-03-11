document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('emailInput');
  const warningMessage = document.getElementById('warningMessage');
  const warningIcon = document.getElementById('warningIcon');

  emailInput.addEventListener('input', function () {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(emailInput.value) || emailInput.value.trim() === '';

      if (!isValid) {
          warningMessage.style.display = 'block';
          warningIcon.style.display = 'block';
      } else {
          warningMessage.style.display = 'none';
          warningIcon.style.display = 'none';
      }
  });
});
