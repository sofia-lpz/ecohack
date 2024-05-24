window.onload = function() {
  fetch('localhost:3000/api/')
    .then(response => response.json())
    .then(data => {
      // Use the data here
      console.log(data);
      document.querySelector('.text_content').innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
};
