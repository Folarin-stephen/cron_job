const username = document.querySelector('#username');
const email = document.querySelector('email');
const birthday = document.querySelector('birthday');
const message = document.querySelector('message')
// Clear previous error messages
// document.getElementById('error-message').add('hidden');
// document.getElementById('api-error-message').add('hidden');
// document.getElementById('success-message').add('hidden');

function submitForm() {
//   // Simple form validation
//   if (!username || !email || !birthday) {
//     document.getElementById('error-message').remove('hidden');
//     return;
//   }

//   // Validate email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     document.getElementById('error-message').remove('hidden');
//     return;
//   }

  const data = {
    username,
    email,
    birthday
  };
  
  // fetch('https://auto-notification-appp.onrender.com/api/v1/user', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data),
  // })
  // .then(response => response.json())
  // .then(data => {
  //     console.log('Response:', data);

  //     if (data.status === 'success') {
  //       alert(data.message);
  //       document.getElementById('success-message').classList.remove('hidden');
  //       // Redirect to the success page on successful submission
  //       window.location.href = '/success';
  //     } else {
  //       // Show error message based on API response
  //       alert(data.message);
  //       document.getElementById('api-error-message').classList.remove('hidden');
  //     }
  // })
  // .catch((error) => {
  //     console.log('Error:', error);
  //     // Show generic error message
  //     alert(error.message);
  //     document.getElementById('api-error-message').classList.remove('hidden');
  // });
}

const form = document.getElementById('birthdayForm');
form.addEventListener('submit',  (event) => {
  console.log(username.value, email.value, birthday.value);
  event.preventDefault(); 

  // submitForm();
});