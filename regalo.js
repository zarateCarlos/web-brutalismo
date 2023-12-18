const btn = document.getElementById('button');
const form = document.getElementById('form')
const phoneInput = document.getElementById('whatsapp');

form.addEventListener('submit', function (event) {
    event.preventDefault();

        btn.value = 'Enviando..';

        const serviceID = 'default_service';
        const templateID = 'template_p8aksgr';
        const phoneNumber = iti.getNumber();
        // Asignar el número al campo correspondiente del formulario
        phoneInput.value = phoneNumber;

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                document.getElementById('form').reset();
                alert('Su mensaje fue enviado correctamente, MUCHAS GRACIAS!');
            }, (err) => {
                btn.value = 'No Enviado';
                alert(JSON.stringify(err));
            });
    });