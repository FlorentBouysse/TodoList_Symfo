import React, { useRef, useState } from 'react'
import {nanoid} from "nanoid";

export default function DynamicUseRef() {
// ######################################
// State
    const [fruits, setFruits] = useState([
        {id: nanoid(8), value: "Fraise"},
        {id: nanoid(8), value: "Pomme"},
        {id: nanoid(8), value: "Cerise"},
    ])

    const fruitsRef = useRef([]);

// ######################################
// Behavior
    // Pour voir ce que ça fait.
    console.log(nanoid(8));
    function deleteFruit(id) {
        setFruits(fruits.filter(fruit => fruit.id !== id))
    }

    function handleRefs(element) {
        if(element) {
            // ici on ajoute l'élément
            fruitsRef.current.push(element);
        } else {
            // Ici on supprime le premier élément du tableau
            fruitsRef.current.shift();
        }
        console.log(element);
    }

// ######################################
// Display
  return (
    <div>
        <ul>
            {fruits.map(fruit => (
                <li 
                key={fruit.id} 
                onClick={() => deleteFruit(fruit.id)}
                ref={handleRefs}>
                    {fruit.value}
                </li>
            ))}
        </ul>
        <button onClick={() => setFruits([...fruits, {id: nanoid(8), value: "Banane"}])}>Add Fruits</button>
    </div>
  )
}
