// config.js - El cerebro de la Nave Madre
const APP_CONFIG = {
    // Identificador único de la tienda
    STORE_ID: "navemadre-demo", 
    
    // Metadatos de la tienda
    STORE_NAME: "Nave Madre Demo",
    STORE_LOGO_URL: "", 
    
    // Configuración de WhatsApp
    WHATSAPP: {
        PHONE_NUMBER: "584120000000", 
        DEFAULT_MESSAGE: "¡Hola! Vengo de la tienda y quiero hacer el siguiente pedido:"
    },
    
    // Configuración de Pagos
    PAYMENTS: {
        PAYPAL: "",
        BINANCE: "",
        ZELLE: ""
    },
    
    // Configuración de ImgBB
    IMGBB: {
        API_KEY: "d73dba3f7a512ecf796baf3b2ba0e2e9"
    },
    
    // Configuración de Firebase (Tus llaves reales)
    FIREBASE: {
        API_KEY: "AIzaSyCQxBJ3_6tNhtITgTvO4uPePlEiWMjkWxQ",
        AUTH_DOMAIN: "navemadre-db.firebaseapp.com",
        DATABASE_URL: "https://navemadre-db-default-rtdb.firebaseio.com",
        PROJECT_ID: "navemadre-db",
        STORAGE_BUCKET: "navemadre-db.firebasestorage.app",
        MESSAGING_SENDER_ID: "763371078686",
        APP_ID: "1:763371078686:web:f95bf5bda4cbad76541a0f"
    }
};
