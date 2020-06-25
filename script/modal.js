let openContactModal = document.querySelector('#contact-modal');
let closeContactModal = document.querySelector('.close-btn');
let sendContactModal = document.querySelector('#send-contact');
let modalWindow = document.querySelector('.modal');

openContactModal.addEventListener('click', function() {
    modalWindow.classList.add('show');
    document.body.classList.add('lock');
})

function closeModal() {
    modalWindow.classList.remove('show');
    document.body.classList.remove('lock');
}

closeContactModal.addEventListener('click', closeModal);
sendContactModal.addEventListener('click', closeModal);
modalWindow.addEventListener('click', function(e) {
    if(e.target === modalWindow) {
        closeModal();
    }
});