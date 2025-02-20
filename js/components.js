
fetch('components/audio.html')
  .then(response => response.text())
  .then(html => document.getElementById('audio').innerHTML = html);

fetch('components/content.html')
  .then(response => response.text())
  .then(html => document.getElementById('content').innerHTML = html);

fetch('components/benefits.html')
  .then(response => response.text())
  .then(html => document.getElementById('benefits').innerHTML = html);

fetch('components/how-to.html')
  .then(response => response.text())
  .then(html => document.getElementById('how-to').innerHTML = html);
  fetch('components/footer.html')
  .then(response => response.text())
  .then(html => document.getElementById('footer').innerHTML = html);