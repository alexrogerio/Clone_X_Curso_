"use client"

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation"
import { useState } from "react"
import { InputZ } from "../ui/input";
import { ButtonZ } from "../ui/button";


export const SigninForm = () => {
    const router = useRouter();
    const [emailField,setEmailField] = useState('');
    const [passwordField,setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/home');
    }

    return (
        <>
            <InputZ 
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={t => setEmailField(t)}
                type="email"
            />
            <InputZ 
                placeholder="Digitie sua senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
                
            />
            <ButtonZ label="Entrar" onClick={handleEnterButton} size={1}/>
            
        </>
    )
}