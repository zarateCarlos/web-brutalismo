const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_p8aksgr';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                document.getElementById('form').reset();
                alert('Sent!');
            }, (err) => {
                btn.value = 'No Enviado';
                alert(JSON.stringify(err));
            });
    });