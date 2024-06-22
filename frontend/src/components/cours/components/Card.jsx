import { useEffect, useState } from "react";


export default function Card() {
// ##############################
// State
    const [state, setState] = useState(0);

// ##############################
// Component
    useEffect(() => {
        console.log('Effet');

        return () => console.log("Fonction de nettoyage");
    })

// ##############################
// Display
    return (
        <div>
            <p>Voici la carte et son state { state }</p>
            <button onClick={() => setState(state + 1)}>Incrémentation</button>
        </div>
    )
}