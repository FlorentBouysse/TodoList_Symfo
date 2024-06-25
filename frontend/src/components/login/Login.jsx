import { useEffect, useState } from "react";
import Button from "../form/Button";
import Input from "../form/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
//##############################################
// State (état, données)
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');
    const [token, setToken]         = useState('');

    const navigate                  = useNavigate();

//##############################################
// Behavior
    function onChangeEmail(e) {
        setEmail(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    // Soumission du formulaire
    async function onSubmitLogin(event) {
        if(event) event.preventDefault();
        try{
            // Requête avec les données envoyé
            const loginResponse = await axios.post("http://127.0.0.1:8000/api/login_check", {
                email: email,
                password: password 
            });

            // Ajout du token dans le state token avec la réponse

            const logToken = loginResponse.data.token;
            
            console.log(loginResponse.data.token);
            console.log(logToken);
            if(logToken) {
                localStorage.setItem("token", logToken);
                localStorage.setItem("email", email);
                setToken(logToken);

                navigate("/listes");
                console.log("jesuisla");

            }
            // console.log(loginResponse.data.token);
        } catch (error) {
            console.log("error: " + error);
        }
    };

//##############################################
// Display
    return (
        <div>
            <h2>Connexion !</h2>
            <div>
                <form method="POST" onSubmit={onSubmitLogin}>
                    <Input type={'email'} name={'email'} label={'Email'} onChange={onChangeEmail} value={email}/>
                    <Input type={'password'} name={'password'} label={'Mot de passe'} onChange={onChangePassword} value={password} />
                    <Button title={"C'est parti !"} />
                </form>
            </div>
        </div>
    )
}