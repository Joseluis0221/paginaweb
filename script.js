function saludar() {
    console.log("Hola Mundo desde JavaScript");
    
    // Mostrar mensaje en la página también
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = '¡Hola Mundo desde JavaScript! 🎉';
    mensajeDiv.classList.add('mensaje-visible');
    
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeDiv.classList.remove('mensaje-visible');
    }, 3000);
}