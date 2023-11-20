import { forwardRef } from "react";
import './form.scss';

// Composant de formulaire réutilisable avec référence transférée (forwardRef)
const Form = forwardRef((props, ref) => {
    return (
        <>
            {/* Affichage du label et input avec les propriétés passées */}
            <label>{props.label}</label>
            <input
                className={props.className}
                ref={ref}
                {...props}
                type={props.type}
            />
        </>
    )
})

export default Form;
