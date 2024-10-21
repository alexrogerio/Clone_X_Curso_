"use client"


import { useRouter } from "next/navigation"
import { useState } from "react"
import { InputZ } from "../ui/input";
import { ButtonZ } from "../ui/button";


export const SignupForm = () => {
    const router = useRouter();
    const [nameField,setNameField] = useState('')
    const [emailField,setEmailField] = useState('');
    const [passwordField,setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/home');
    }

    return (
        <>
            <InputZ 
                placeholder="Digite seu nome"
                value={nameField}
                onChange={t => setNameField(t)}
                type="text"
            />
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
            <ButtonZ label="Criar Conta" onClick={handleEnterButton} size={1}/>
            
        </>
    )
}