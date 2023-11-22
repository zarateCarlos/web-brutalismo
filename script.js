window.onscroll = () => {
    let posicion = window.scrollY || document.documentElement.scrollTop;

    let insta = document.getElementById("insta");
    let tik = document.getElementById("tik");

    insta.style.bottom = posicion * 0.2 + "px";
    tik.style.bottom = posicion * 0.2 + "px";



}

window.onload = async () => {
    try {
        const response = await fetch('data.json');
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
    const container = document.getElementById('services-container');

    services.forEach((servicio) => {
        const serviceElement = createServiceElement(servicio);
        container.appendChild(serviceElement);
    });
}




function createServiceElement(servicio) {
    const div = document.createElement('div');
    div.classList.add('servicio');

    const img = document.createElement('img');
    img.src = '/icons8-estrella-100.png';
    img.alt = 'icono estrella';
    div.appendChild(img);

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const h4 = document.createElement('h4');
    h4.textContent = servicio.nombre;
    itemDiv.appendChild(h4);

    const button = document.createElement('button');
    button.classList.add('view-modal-btn');
    button.textContent = 'saber mas';
    button.onclick = () => openModal(servicio.nombre, servicio.descripcion); // Pasa nombre y descripción al abrir el modal
    itemDiv.appendChild(button);

    div.appendChild(itemDiv);

    return div;
}


function openModal(nombre, descripcion) {
    const modal = document.getElementById('myModal');
    modal.innerHTML = `
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h2>${nombre}</h2>
        <p>${descripcion}</p>
    `;
    modal.showModal();
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.close();
}


