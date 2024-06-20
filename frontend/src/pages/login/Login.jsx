import Button from "../../components/form/Button";
import Input from "../../components/form/Input";


export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(new FormData(e.target));
    }
    return (
        <div>
            <h2>Connexion !</h2>
            <div>
                <form action="#" method="POST" onSubmit={handleSubmit}>
                    <Input type={'email'} name={'email'} label={'Email'}/>
                    <Input type={'password'} name={'password'} label={'Mot de passe'} />
                    <Button title={"C'est parti !"} />
                </form>
            </div>
        </div>
    )
}