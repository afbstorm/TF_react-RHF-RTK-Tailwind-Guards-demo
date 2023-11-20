import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice.js";

// Configuration du store Redux
export const store = configureStore({
    reducer: {
        // Ajout du réducteur d'authentification
        auth: authReducer
    }
})
