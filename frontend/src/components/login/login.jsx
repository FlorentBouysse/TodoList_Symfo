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
                    <label htmlFor="email">Email</label>
                    <input type="email" />
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" />
                    <button>C'est parti !</button>
                </form>
            </div>
        </div>
    )
}