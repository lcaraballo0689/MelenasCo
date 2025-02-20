
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

  const PUSHBULLET_ACCESS_TOKEN = 'o.d5eGGYlfEAs1Iw2gjT5aquxQQJFgTnyW';

  // Función para enviar una notificación a Pushbullet
  async function sendPushbulletNotification(title, message) {
      try {
          const response = await fetch('https://api.pushbullet.com/v2/pushes', {
              method: 'POST',
              headers: {
                  'Access-Token': PUSHBULLET_ACCESS_TOKEN,
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  type: 'note',
                  title: title,
                  body: message,
              }),
          });
  
          if (response.ok) {
              console.log('Notificación enviada a Pushbullet.');
          } else {
              console.error('Error al enviar la notificación.');
          }
      } catch (error) {
          console.error('Error:', error);
      }
  }
  
  // Captura el clic en el botón y envía la notificación
  document.getElementById('notifyButton').addEventListener('click', () => {
      // Envía la notificación a Pushbullet
      sendPushbulletNotification(
          'Nuevo Click en tu Landing Page',
          'Alguien hizo clic en el botón de cotización en WhatsApp.'
      );
  
      // No bloquees la redirección a WhatsApp
  });
  