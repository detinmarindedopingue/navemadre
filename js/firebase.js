// 1. Importamos las herramientas de Firebase v10 (modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 2. Traemos la configuración desde config.js
import { firebaseConfig } from './config.js';

// 3. Inicializamos la conexión con Firebase
const app = initializeApp(firebaseConfig);

// 4. Creamos la "manguera" (la referencia a la base de datos)
const db = getDatabase(app);

// 5. Exportamos la manguera para que app.js pueda usarla
export { db };
