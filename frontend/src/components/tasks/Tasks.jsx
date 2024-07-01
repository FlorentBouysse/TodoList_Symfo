import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, redirect, useParams } from 'react-router-dom';

export default function Tasks() {
//###################################
//State
    const [tasksList, setTasksList] = useState({
        loading: true,
        error: false,
        data: undefined
    });

    // Get id in URL
    const {listId} = useParams();
    let content;
    // console.log(listId);

//###################################
//Behavior
    async function handleDelete(event) {
        if(event) event.preventDefault();
        setTasksList({...tasksList, loading: true});
        // console.log(event.target.id);
        const taskId = event.target.id;

        try {
            const config = {
                headers: {Authorization: `Bearer ${localStorage.token}`}
            };

            const taskDeleteresponse = await axios.delete(`http://127.0.0.1:8000/api/task/${taskId}/delete`, config);
            console.log(taskDeleteresponse);
            const taskListCopy = tasksList.data; 

            const newDataTaskList = tasksList.data.tasks.filter((task) => {
                console.log(task.id);
                return task.id != taskId
            })
    
            taskListCopy["tasks"] = newDataTaskList;
            // console.log(taskListCopy);


            // mettre dans le setter en pensant qu'il y a loading error et data
            setTasksList({loading: false, error: false, data: taskListCopy});
            // console.log(tasksList);
            
        } catch (error) {
            setTasksList({...tasksList, error:true});
            console.log(error);
        }
    }

    useEffect(() => {
        setTasksList({...tasksList, loading: true});
        async function fetchTasks() {
            try {
                // configuration du header de la requete
                const config = {
                    headers: {Authorization: `Bearer ${localStorage.token}`}
                };

                const taskResponse = await axios.get(`http://127.0.0.1:8000/api/list/${listId}`, config);

                // console.log(taskResponse.data.tasks);
                setTasksList({loading: false, error: false, data: taskResponse.data})
            } catch (error) {
                console.log(error);
                setTasksList({...tasksList, loading: false, error: true});
            }
        }
        fetchTasks();

    }, [])

    if(tasksList.loading) content = <div>Loading...</div>
    else if(tasksList.error) content = <div>Une erreur est survenue...</div>
    else if(tasksList.data?.tasks.length > 0) {
        content = <div>
            <h2>Liste: { tasksList.data.name }</h2>
            <ul>
                {tasksList.data ? tasksList.data.tasks.map(task => (
                    <li key={task.id}>
                        {task.name}
                        
                            <button onClick={handleDelete} value={task.id}><i id={task.id} className="fa-solid fa-trash"></i></button>
                    </li>
                )) : "Vous n'avez aucune tâche dans cette liste !"}
            </ul>
        </div>
    }
    else if(tasksList.data?.tasks.length === 0) content = <p>Votre requête ne correspond à aucune données !</p>

//###################################
//Display
  return (
    <div>
        <Link to={`../listes/${listId}/nouvelle-tache`}><button>Créer une nouvelle tâche</button></Link>
        { content }
    </div>
  )
}
