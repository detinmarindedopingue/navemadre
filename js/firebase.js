// 1. La palabra "export" es OBLIGATORIA para que firebase.js pueda leer esto
export const firebaseConfig = {
    apiKey: "TU_API_KEY_REAL",
    authDomain: "navemadre-db.firebaseapp.com",
    databaseURL: "https://navemadre-db-default-rtdb.firebaseio.com",
    projectId: "navemadre-db",
    storageBucket: "navemadre-db.appspot.com",
    messagingSenderId: "763371078686",
    appId: "1:763371078686:web:f95bf5bda4cbad76541a0f"
};

// 2. Aquí abajo puedes dejar tu configuración de WhatsApp y ImgBB si la tenías
// (pero asegúrate de que firebaseConfig tenga la palabra export al principio)
export const storeConfig = {
    storeName: "Navemadre",
    whatsappNumber: "1234567890",
    imgbbApiKey: "d73dba3f7a512ecf796baf3b2ba0e2e9"
};
