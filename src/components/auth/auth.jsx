import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { setLogin } from "../../store/slices/auth.slice.js";
import { useEffect, useState } from "react";
import {Button, CircularProgress, IconButton} from "@mui/material";
import Form from "../form/form.jsx";
import { login } from "../../services/auth.service.js";
import { useNavigate } from "react-router-dom";
import './auth.scss';

const Auth = () => {
    // Déclaration des états locaux et des hooks
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { handleSubmit, control } = useForm({
        defaultValues: {
            login: '',
            password: ''
        }
    });

    // Fonction appelée lors de la soumission du formulaire
    const onSubmit = (datas) => {
        console.log(datas)
        // Dispatch de l'action pour mettre à jour les informations de connexion dans Redux
        dispatch(setLogin(datas));
        // Activation de l'état de chargement
        setIsLoading(true);
    };

    // Sélection des informations de connexion depuis le store Redux
    const loginInfos = useSelector(state => state.auth);

    // Fonction asynchrone pour connecter l'utilisateur
    const logUser = async () => {
        const res = await login(loginInfos);
        if (res) {
            // Désactivation de l'état de chargement et redirection vers le tableau de bord
            setIsLoading(false);
            localStorage.setItem('authToken', res.data.token)
            navigate('dashboard');
        }
    };

    // Effet pour déclencher la connexion lors du changement de l'état de chargement
    useEffect(() => {
        isLoading ? logUser() : null;
    }, [isLoading]);

    // Rendu conditionnel du spinner de chargement ou du formulaire de connexion
    return (
        <div>
            {isLoading ?
                <CircularProgress />
                :
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    {/* Contrôles de formulaire pour les champs de connexion */}
                    <Controller
                        control={control}
                        name='login'
                        render={({ field }) => (
                            <Form
                                {...field}
                                label='Login'
                                type='text'
                                className='form__input__login'/>
                        )} />
                    <Controller
                        control={control}
                        name='password'
                        render={({ field }) => (
                            <Form
                                {...field}
                                label='Password'
                                type='password'
                                className='form__input__password'/>
                        )} />
                    <IconButton type='submit'>Envoyer</IconButton>
                </form>}
        </div>
    )
}

export default Auth;
