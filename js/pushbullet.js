
    // Tu token de acceso de Pushbullet
    const PUSHBULLET_ACCESS_TOKEN = 'o.xCxKGbDFRsanVZ2RLfKavOCAiRd7bD8R';

    // Función para enviar una notificación a Pushbullet
    function sendPushbulletNotification(title, message) {
        fetch('https://ntfy.melenasco.com/web', {
            method: 'POST', // PUT works too
            body: message
        })
        fetch('https://api.pushbullet.com/v2/pushes', {
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
        })
        .then(response => {
            if (response.ok) {
                console.log('Notificación enviada a Pushbullet');
            } else {
                console.error('Error al enviar la notificación');
            }
        })
        .catch(error => console.error('Error:', error));
    }

    // Enviar notificación cuando alguien visite la página
    sendPushbulletNotification('Nueva visita', 'Alguien visitó MelenasCo - LandingPage');

    // Captura el clic en el botón y envía la notificación
    document.getElementById('notifyButton').addEventListener('click', () => {

        // Crea el mensaje con la información del cliente
        const message = `Nuevo clic en el botón de cotización en WhatsApp.`;
        
        // Envía la notificación a Pushbullet
        sendPushbulletNotification(
            'Nuevo Click en tu Landing Page',
            message
        );

        // Redirige al usuario a WhatsApp sin bloquearlo
        window.location.href = 'https://wa.me/573127687099'; // Tu enlace de WhatsApp
    });

