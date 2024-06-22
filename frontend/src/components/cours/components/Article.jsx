import { useEffect, useState } from "react"

// Fonction pour afficher le timer
const convertSecondsToHMS = (timeInSeconds) => {
    timeInSeconds = Number(timeInSeconds);
    const h = Math.floor(timeInSeconds / 3600);
    const m = Math.floor(timeInSeconds % 3600 / 60);
    const s = Math.floor(timeInSeconds % 3600 % 60);

    const hDisplay = h < 10 ? '0' + h : h;
    const mDisplay = h < 10 ? '0' + m : m;
    const sDisplay = h < 10 ? '0' + s : s;

    return `${hDisplay}:${mDisplay}:${sDisplay}`;
}

// Début du module
const Article = ({ title = '', children = null }) => {
// #####################################################    
    // State
    const [ elapsedTime, setElapsedTime ] = useState(0);
    const [ count, setCount ] = useState(0);

// #####################################################
    // Component
    useEffect(() => {
        console.log('first useEffect');
    })

    useEffect(() => {
        console.log('second useEffect with dependency array');
    }, [])

    // useEffect(() => {
    //     // useEffect s'exécute TOUJOURS au montage du composant
    //     // S'exécute aussi à chaque MAJ du state
    //     console.log('JE suis la');
    //     setInterval(() => {
    //         setElapsedTime(prevTime => prevTime + 1);
    //     }, 1000);
    // }, [])

// #####################################################
    // Display
    return (
        <div>
            <h2>{ title }</h2>
            <p>Temps de lecture: { convertSecondsToHMS(elapsedTime) }</p>
            { children }
            <br/>
            <br/>
            <br/>
            <h2>{ count }</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Article;