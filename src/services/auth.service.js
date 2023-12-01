// Importation d'axios pour les requêtes HTTP
import axios from "axios";

// Fonction asynchrone pour la connexion
export const login = async (datas) => {
    try {
        // Envoi d'une requête POST avec axios au serveur local pour l'authentification
        const response = await axios.post('http://localhost:3002/api/auth/login', datas);
        // Retourne la réponse en cas de succès
        console.log(response)
        return response;
    } catch (err) {
        // Gestion des erreurs en cas d'échec de la requête
        console.error(err);
    }
}
