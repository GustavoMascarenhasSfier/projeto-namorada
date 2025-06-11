const envelope = document.querySelector('.envelope');
const heartSeal = document.querySelector('.heart-seal');
let timeoutId;

// A transição de opacidade é definida uma vez após a página carregar
window.addEventListener("DOMContentLoaded", () => {
    heartSeal.style.transition = 'opacity 0.3s ease'; // Define a transição de opacidade
    heartSeal.style.opacity = 0; // Garantir que o heartSeal começa invisível
});

// Quando o mouse entra no envelope
envelope.addEventListener('mouseover', () => {
    clearTimeout(timeoutId); // Limpa qualquer timeout anterior
    heartSeal.style.opacity = 0; // Torna o heartSeal invisível ao passar o mouse
});

// Quando o mouse sai do envelope
envelope.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        heartSeal.style.opacity = 1; // Torna o heartSeal visível após o timeout
    }, 1500); 
});
