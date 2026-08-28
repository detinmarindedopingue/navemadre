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
    
    // Configuración de ImgBB (Para subir fotos)
    IMGBB: {
        API_KEY: "d73dba3f7a512ecf796baf3b2ba0e2e9"
    },
    
    // Configuración de Firebase
    FIREBASE: {
        API_KEY: "",
        AUTH_DOMAIN: "",
        DATABASE_URL: "",
        PROJECT_ID: "",
        STORAGE_BUCKET: "",
        MESSAGING_SENDER_ID: "",
        APP_ID: ""
    }
};
