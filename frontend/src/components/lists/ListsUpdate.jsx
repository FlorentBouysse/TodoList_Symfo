import React, { useState } from 'react'
import Input from '../form/Input';
import Button from '../form/Button';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ListsUpdate() {
//##########################################
// State
    const [listName, setListName] = useState('');
    const navigate = useNavigate();

    const {id} = useParams();
//##########################################
// Behavior
    function onChangeListName(event) {
        setListName(event.target.value);
    }

    async function onSubmitCreate(event) {
        if(event) event.preventDefault();
        try{
            const config = {
                headers: {Authorization: `Bearer ${localStorage.token}`}
            }
            const listResponse = await axios.put(`http://127.0.0.1:8000/api/list/${id}/update`, {
                name: listName
            }, config);

            navigate('/listes');
            console.log(listResponse);
        } catch (error) {
            console.log('error: ', error);
        }
    }

//##########################################
// Display
  return (
    <div>
        <h1>Modifier le nom de la listes: {localStorage.updateList}</h1>
        <form method='POST' onSubmit={onSubmitCreate}>
            <Input 
                type={'text'} 
                name={'name'} 
                label={'Nom de la liste'}
                onChange={onChangeListName}
                placeholder={localStorage.updateList} />
            <Button title={"Modifier"} />
        </form>
    </div>
  )
}
