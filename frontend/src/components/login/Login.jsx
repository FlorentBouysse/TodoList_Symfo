import { useEffect, useState } from "react";
import Button from "../form/Button";
import Input from "../form/Input";
import axios from "axios";


export default function Login() {
//##############################################
// State (état, données)

    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

//##############################################
// Behavior
    function onChangeEmail(e) {
        setEmail(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }


    async function login(event) {
        if(event) event.preventDefault();
        try{
            const loginResponse = await axios.post("http://127.0.0.1:8000/api/login_check", {
                email: email,
                password: password 
            });
            console.log(loginResponse);
        } catch (error) {
            console.log("error: " + error);
        }
    }

    // async function onSubmitLogin(e) {
    //     e.preventDefault();
    //     try {
    //         const loginResponse = await axios.post('http://127.0.0.1:8000/api/login_check', {
    //             email: email,
    //             password: password
    //         });

    //         const token = loginResponse.data.token;

    //         if (token) {
                
    //         }
    //     }
    // }

//##############################################
// Affichage
    return (
        <div>
            <h2>Connexion !</h2>
            <div>
                <form method="POST" onSubmit={login}>
                    <Input type={'email'} name={'email'} label={'Email'} onChange={onChangeEmail} value={email}/>
                    <Input type={'password'} name={'password'} label={'Mot de passe'} onChange={onChangePassword} value={password} />
                    <Button title={"C'est parti !"} />
                </form>
            </div>
        </div>
    )
}