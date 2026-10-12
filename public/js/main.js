function switchTab(tipo) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    const origenInput = document.querySelector('.search-form .input-group:nth-child(1) input');
    if (!origenInput) return;

    if (tipo === 'vuelos') {
        origenInput.placeholder = "¿Desde qué aeropuerto sales?";
    } else if (tipo === 'autobuses') {
        origenInput.placeholder = "¿Desde qué terminal sales?";
    } else {
        origenInput.placeholder = "¿Desde qué dirección o hotel sales?";
    }
}
