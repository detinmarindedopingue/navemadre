// 1. Importamos el tubo de conexión (la inicialización de Firebase) 
// que ya configuraste en firebase.js. Asumimos que firebase.js exporta 'db'.
import { db } from './firebase.js'; 

// 2. Importamos las herramientas específicas de Firebase v10 para leer datos.
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 3. Definimos el contenedor del HTML donde irán los productos.
const productContainer = document.getElementById('product-container');

// 4. Apuntamos a la ruta exacta en el árbol de Firebase. 
// Usamos la misma ruta del JSON que acabas de importar.
const productsRef = ref(db, 'stores/navemadre-demo/products');

// 5. onValue es un "oyente". Se queda vigilando esa ruta. 
// Si cambias un precio en Firebase, esto se dispara solo y actualiza la web. Magia en tiempo real.
onValue(productsRef, (snapshot) => {
    
    // Limpiamos el contenedor por si acaso
    productContainer.innerHTML = ''; 

    // Preguntamos si Firebase devolvió datos
    if (snapshot.exists()) {
        const products = snapshot.val(); // Convierte el árbol de Firebase en un objeto de JavaScript
        
        // Iteramos sobre cada producto (prod_001, prod_002, etc.)
        for (const productId in products) {
            const product = products[productId]; // Extraemos los detalles (name, price, etc.)

            // Creamos el esqueleto HTML de la tarjeta del producto
            const card = `
                <div class="product-card" style="border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 8px;">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <strong>$${product.price}</strong>
                    <br><br>
                    <button>Comprar</button>
                </div>
            `;
            
            // Inyectamos la tarjeta creada dentro del contenedor del HTML
            productContainer.innerHTML += card;
        }
    } else {
        // Si no hay datos o el cliente los borró todos, muestra esto
        productContainer.innerHTML = '<p>No hay productos disponibles.</p>';
    }
});
