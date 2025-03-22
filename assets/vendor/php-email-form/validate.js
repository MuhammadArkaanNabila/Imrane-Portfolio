document.querySelector('.php-email-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);

  try {
      const response = await fetch(form.action, {
          method: 'POST',
          body: formData
      });

      if (!response.ok) throw new Error('Network error');

      const result = await response.json();
      
      if (result.success) {
          // Show success message
          document.querySelector('.sent-message').style.display = 'block';
      } else {
          // Show error message
          document.querySelector('.error-message').textContent = result.message;
      }

  } catch (error) {
      document.querySelector('.error-message').textContent = 'Failed to send message.';
  }
});