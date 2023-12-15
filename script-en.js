window.onscroll = () => {
    let posicion = window.scrollY || document.documentElement.scrollTop;

    let insta = document.getElementById("insta");
    let tik = document.getElementById("tik");

    insta.style.bottom = posicion * 0.2 + "px";
    tik.style.bottom = posicion * 0.2 + "px";


}

function cambiarIdioma(archivo) {
    window.location.href = archivo;
}

function toggleOptions() {
    const optionsList = document.getElementById('optionsList');
    optionsList.style.display = (optionsList.style.display === 'none' || optionsList.style.display === '') ? 'block' : 'none';
}


document.addEventListener("click", function (e) {
    const optionsList = document.getElementById('optionsList');
    const selectedOption = document.querySelector('.selected-option');

    if (!optionsList.contains(e.target) && e.target !== selectedOption && e.target.className !== 'bandera') {
        optionsList.style.display = 'none';
    }
});


window.onload = async () => {
    try {
        const response = await fetch('data-en.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        const data = await response.json();
        renderServices(data);
    } catch (error) {
        console.error(error);
    }
};

function renderServices(services) {
    const container = document.getElementById('services-container-en');

    services.forEach((servicio) => {
        const serviceElement = createServiceElement(servicio);
        container.appendChild(serviceElement);
    });
}


function createServiceElement(servicio) {
    const div = document.createElement('div');
    div.classList.add('servicio');

    const img = document.createElement('img');
    img.src = 'img/icons8-estrella-100.png';
    img.alt = 'icono estrella';
    img.loading = 'lazy';
    div.appendChild(img);

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const h4 = document.createElement('h4');
    h4.textContent = servicio.nombre;
    itemDiv.appendChild(h4);

    const button = document.createElement('button');
    button.classList.add('view-modal-btn');
    button.textContent = 'saber mas';
    button.onclick = () => openModal(servicio.nombre.replace(/\n/g, `<br>`), servicio.descripcion.replace(/\n/g, `<br>`), servicio.colorFondo, servicio.numero); // Pasa nombre y descripción al abrir el modal
    itemDiv.appendChild(button);



    div.appendChild(itemDiv);

    return div;
}

function openModal(nombre, descripcion, colorFondo, numero) {
    const modal = document.getElementById('myModal-en');
    modal.innerHTML = `
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h2>${nombre}</h2>
        <p>${descripcion}</p>
        <p class="pepe">ARRANGE FREE CONSULTATION</p>
        <div class="coordinar gratiss">
        <a target="_blank" href=${numero}><img loading="lazy" src="img/whatsapp.png" alt="">WhatsApp</a>
        </div>
        
    `;

    modal.style.backgroundImage = colorFondo;

    modal.showModal();
}

function closeModal() {
    const modal = document.getElementById('myModal-en');
    modal.close();
}



const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_uuhkt81';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                document.getElementById('form').reset();
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });
