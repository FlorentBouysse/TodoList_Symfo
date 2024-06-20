import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <Link to='/'>Accueil</Link>
            <h2>Cette page n'existe pas !</h2>
        </div>
    )
}