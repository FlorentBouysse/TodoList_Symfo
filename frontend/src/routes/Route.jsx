import {createBrowserRouter, Link} from "react-router-dom";
import NotFoundPage from '../components/errorPage/NotFoundPage';
import Lists from "../components/lists/Lists";
import Login from "../components/login/Login";
import ListsCreate from "../components/lists/ListsCreate";
import Tasks from "../components/tasks/Tasks";
import TasksCreate from "../components/tasks/TasksCreate";
import ListsUpdate from "../components/lists/ListsUpdate";


const router = createBrowserRouter([
    {
        name: "Connexion",
        path: '/',
        element: (
        <div>
            <Login />
        </div>
        ),
        errorElement: <NotFoundPage />
    },
// #########################################
// List
// #########################################
    {
        path: '/listes',
        element: (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/listes">Mes listes</Link>
            </nav>
            <Lists />
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
    {
        path: '/listes/:listId',
        element: (
            <div>
            <nav>
            <Link to="/listes">Mes listes</Link>
            </nav>
            <Tasks />
        </div>
        ),
    },
    {
        path: '/listes/modifier/:id',
        element: (
            <div>
            <nav>
            <Link to="/listes">Mes listes</Link>
            </nav>
            <ListsUpdate />
        </div>
        ),
    },
// #########################################
// Task
// #########################################
    {
        path: '/listes/:listId/nouvelle-tache',
        element: (
        <div>
            <nav>
            <Link to="/listes">Mes listes</Link>
            </nav>
            <TasksCreate />
        </div>
        ),
    },
    // {
    //     path: '/listes/:listId/nouvelle-tache',
    //     element: (
    //     <div>
    //         <nav>
    //         <Link to="/listes">listes</Link>
    //         </nav>
    //         <TasksCreate />
    //     </div>
    //     ),
    // },
    // {
    //     path: '/listes/:listId/nouvelle-tache',
    //     element: (
    //     <div>
    //         <nav>
    //         <Link to="/listes">listes</Link>
    //         </nav>
    //         <TasksCreate />
    //     </div>
    //     ),
    // },
]);

export default router;