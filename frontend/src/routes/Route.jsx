import {createBrowserRouter, Link} from "react-router-dom";
import NotFoundPage from '../components/errorPage/NotFoundPage';
import Lists from "../components/lists/Lists";
import Login from "../components/login/Login";
import ListsCreate from "../components/lists/ListsCreate";


const router = createBrowserRouter([
    {
        name: "Connexion",
        path: '/',
        element: (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/listes">listes</Link>
            </nav>
            <Login />
        </div>
        ),
        errorElement: <NotFoundPage />
    },
    {
        path: '/listes',
        element: (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/listes">listes</Link>
            </nav>
            <Lists />
        </div>
        ),
    },
    {
        path: '/listes/:listId',
        element: (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/listes">listes</Link>
            </nav>
            Page de tâches
        </div>
        ),
    },
    {
        path: '/listes/creer',
        element: (
        <div>
            <nav>
            <Link to="/listes">Mes listes</Link>
            </nav>
            <ListsCreate />
        </div>
        ),
    },
]);

export default router;