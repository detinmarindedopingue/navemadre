// firebase.js - Conexión a la base de datos
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Tomamos la configuración del cerebro (config.js)
const firebaseConfig = {
  apiKey: APP_CONFIG.FIREBASE.API_KEY,
  authDomain: APP_CONFIG.FIREBASE.AUTH_DOMAIN,
  databaseURL: APP_CONFIG.FIREBASE.DATABASE_URL,
  projectId: APP_CONFIG.FIREBASE.PROJECT_ID,
  storageBucket: APP_CONFIG.FIREBASE.STORAGE_BUCKET,
  messagingSenderId: APP_CONFIG.FIREBASE.MESSAGING_SENDER_ID,
  appId: APP_CONFIG.FIREBASE.APP_ID
};

// Encendemos Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Lo hacemos global para que app.js y admin.js puedan usarlo
window.db = db;
window.auth = auth;
