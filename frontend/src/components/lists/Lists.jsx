import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom';


export default function Lists() {
// #####################################
// State
    const [userData, setUserData] = useState({
        loading: true,
        error: false,
        data: undefined
    });
    const [listData, setListData] = useState({
        loading: true,
        error: false,
        data: undefined
    });

    let content;
    let listsData;

// #####################################
// Behavior
    // console.log(localStorage.token);
    useEffect(() => {
        setUserData({...userData, loading: true});
        async function fetchLists() {
            try{
                // Configuration du headers de la requête
                const config = {
                    headers: {Authorization: `Bearer ${localStorage.token}`}
                };
                const userDataResponse = await axios.get(`http://127.0.0.1:8000/api/user/${localStorage.email}`, config);

                setUserData({loading: false, error: false, data: userDataResponse.data});

                // Ici je stock l'id de l'utilisateur actuel pour pouvoir
                // réutiliser son id pour la création d'une liste par exemple
                localStorage.setItem("userId", userDataResponse.data.id);
                // console.log(userDataResponse.data);
            } catch(error) {
                console.log('Error: ', error);
                setUserData({loading: false, error: true, data: undefined});
            }
        }

        fetchLists()
    }, [])

    
    console.log(userData.data);
    console.log(userData.data?.length > 0);
    if(userData.loading) content = <div>Loading...</div>
    else if(userData.error) content = <div>Une erreur est survenue...</div>
    else if(userData.data) {
        console.log('lalal');
        console.log(userData.data.nickname);
        content = <div>
                <h2>Bonjour {userData.data.nickname}</h2>
                <ul>{userData.data ? userData.data.todolistId.map(list => (
                    <li key={list.id}>
                        <Link to={`../listes/${list.id}`}>
                            { list.name }
                        </Link>
                    </li>
                )) : "Vous n'avez aucune liste" }</ul>
            </div>
    }
    else if(userData.data?.length === 0) {
        content = <p>Votre requête ne correspond à aucune données !</p>
    }
    else {
        console.log('je suis dans le else');
    }

// #####################################
// Display
    return (
        <div>
            <Link to={`../listes/creer`}><button>Créer une nouvelle todolist</button></Link>
            { content }
        </div>
    )
}