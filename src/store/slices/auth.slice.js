import { createSlice } from "@reduxjs/toolkit";

// État initial pour l'authentification
const initialState = {
    login: '',
    password: ''
}

// Création du slice Redux pour la gestion de l'état d'authentification
const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Reducer pour définir les informations de connexion
        setLogin: (state, action) => {
            state.login = action.payload.login;
            state.password = action.payload.password;
        }
    }
})

// Exportation des actions et du réducteur
export const { setLogin } = AuthSlice.actions;
export default AuthSlice.reducer;
