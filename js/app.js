// app.js - Motor de la tienda
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Ponemos el nombre de la tienda en el título
    const storeNameElement = document.getElementById('store-name');
    if (storeNameElement && APP_CONFIG.STORE_NAME) {
        storeNameElement.innerText = APP_CONFIG.STORE_NAME;
    }

    // 2. Configuramos el botón de WhatsApp con el número del config.js
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn && APP_CONFIG.WHATSAPP) {
        const phone = APP_CONFIG.WHATSAPP.PHONE_NUMBER;
        const message = encodeURIComponent(APP_CONFIG.WHATSAPP.DEFAULT_MESSAGE);
        whatsappBtn.href = `https://wa.me/${phone}?text=${message}`;
    }

    // 3. Aquí es donde en el próximo paso conectaremos a Firebase 
    // para traer los productos y dibujarlos en pantalla.
    const productosContainer = document.getElementById('productos-container');
    productosContainer.innerHTML = `<p style="text-align: center; margin-top: 50px;">Nave Madre lista. Conecta tu Firebase para ver los productos aquí.</p>`;

});
