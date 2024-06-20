import {createBrowserRouter, Link} from "react-router-dom";
import NotFoundPage from '../components/errorPage/NotFoundPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: (
        <div>
            Page de login
            <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contacte</Link>
            </nav>
        </div>
        ),
        errorElement: <NotFoundPage />
    },
    {
        path: '/blog',
        element: (
        <div>
            Page de blog
            <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contacte</Link>
            </nav>
        </div>
        ),
    },
    {
        path: '/contact',
        element: (
        <div>
            Page de contact
            <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            </nav>
        </div>
        ),
    },
    ]);

    export default router;