import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../form/Input';
import Button from '../form/Button';

export default function TasksUpdate() {
//#########################################
// State
    const [task, setTask] = useState('');
    const navigate = useNavigate();
    const {taskId} = useParams();
    const {listId} = useParams();

//#########################################
// Behavior
    function onChangeTaskName(event) {
        setTask(event.target.value);
    }

    async function onSubmitCreate(event) {
        if(event) event.preventDefault();
        try {
            const config = {
                headers: {Authorization: `Bearer ${localStorage.token}`}
            };
            const taskResponse = await axios.put(`http://127.0.0.1:8000/api/task/${taskId}/update`, {
                name: task
            }, config);

            navigate(`/listes/${listId}`);
            console.log(taskResponse);
        } catch (error) {
            console.log(error);
        }
    }

//#########################################
// Display
  return (
    <div>
        <h1>Modifier la tâche: {localStorage.updateTask}</h1>
        <form method='POST' onSubmit={onSubmitCreate}>
            <Input 
                type={'text'}
                name={'name'}
                label={'Nom de la tâche'}
                onChange={onChangeTaskName}
                placeholder={localStorage.updateTask} />
            <Button title={"Créer"} />
        </form>
    </div>
  )
}
