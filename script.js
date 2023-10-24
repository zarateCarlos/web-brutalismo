window.onscroll = () => {
    let posicion = window.scrollY || document.documentElement.scrollTop;

let insta = document.getElementById("insta");
let tik = document.getElementById("tik");

insta.style.bottom = posicion * 0.2 + "px";
tik.style.bottom = posicion * 0.2 + "px";



}

function openModal() {
    const modal = document.getElementById('myModal');
    modal.showModal();
}
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.close();
}