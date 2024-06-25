import React, { useState } from 'react'
import Input from '../form/Input';
import Button from '../form/Button';
import axios from 'axios';

export default function ListsCreate() {
//##########################################
// State
    const [listName, setListName] = useState('');

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
            const listResponse = await axios.post('http://127.0.0.1:8000/api/list/create', {
                name: listName,
                userid: localStorage.userId
            }, config);

            console.log(listResponse);
        } catch (error) {
            console.log('error: ', error);
        }
    }

//##########################################
// Display
  return (
    <div>
        <h1>Créer une nouvelle liste !</h1>
        <form method='POST' onSubmit={onSubmitCreate}>
            <Input 
                type={'text'} 
                name={'name'} 
                label={'Nom de la liste'}
                onChange={onChangeListName}
                value={listName} />
            <Button title={"Créer"} />
        </form>
    </div>
  )
}
