# Hook useEffect

Source => https://www.youtube.com/watch?v=9XQkiwby3nw&list=PLgoQdsUbJsV7TORQSnYXjRMr1L6zVBYqw&index=3

## Information importante

Un <strong>useEffect</strong> à un cycle de vie: 
- Mounting  => Lorsqu'il est activé, il se monte (il naît).
- Update    => Ensuite il se met à jour (il évolue).
- - <strong style="color:red">NOTE : </strong>Ici, il fait un cleanup. <strong>[Voir II. Fonction de nettoyage]</strong>
- Unmount   => Et enfin il se démonte (il meurt).
- - Effet de cleanup aussi.

## I. useEffect
Un useEffect s'exécute toujours au montage du composant mais aussi à chaque mises à jour du state peu importe où il se trouve dans le composant.
```js
// State
    const [ count, setCount ] = useState(0);

// Component
    useEffect(() => {
        console.log('first useEffect');
    })

// Display
    return (
        <div>
            <h2>{ count }</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
```
Ici, chaque fois que j'appuierais sur le bouton pour incrémenter, il y aura une mise a jour du state et un remontage du useEffect. Ce qui signifie qu'à chaque incrémentation de count, j'aurais dans ma console "first useEffect" qui s'affichera. <br><br>
Pour y remédier, il nous faut ajouter un tableau de dépendance en second argument du useEffect :
```js
// State
    const [ count, setCount ] = useState(0);

// Component
    useEffect(() => {
        console.log('first useEffect');
    })

    useEffect(() => {
        console.log('second useEffect with dependency array');
    }, [])

// Display
    return (
        <div>
            <h2>{ count }</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
```
Ici, lorsque l'on appuiera sur le bouton d'incrémentation, 'first useEffect' sera de nouveau affiché pour chacune d'entre elles, 'second useEffect with dependency array' en revanche ne sera affiché qu'au montage du composant.<br><br>
Dans le tableau de dépendance, il est possible de mettre une valeur comme "count" par exemple, cela servira à le surveiller. (pas d'autre explication pour le moment)

## II. Fonction de nettoyage

Voici le composant Card :

```js
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
```

Ce qu'il est important de voir, c'est que lorsque le composant est monté pour la première fois, seul le log 'effet' est affiché dans la console. C'est lors de la mise à jour ou de la destruction du useEffect qu'on verra affiché "Fonction de nettoyage". <br><br>
Cela permet de voir la vie d'un useEffect.

## III. Evènement global

Ce useEffect est ici pour détecter le scroll de l'application. Dans le dossier "globalEvent/GlobalEvent.jsx", j'ai ajouté un bouton pour afficher ou non le contenu. Lorsqu'on affiche le contenu, le useEffect se déclenche et détecte le scroll.<br>
Puis lorsqu'on cache le contenu, normalement le scroll ne devrait plus être détecté mais il l'est encore.
```js
useEffect(() => {
        window.addEventListener("scroll", handleGlobalScroll);

        function handleGlobalScroll(){
            console.log('Scrolling !!');
        }
    }, []);
```

Voici la solution à ce problème:
```js
useEffect(() => {
        window.addEventListener("scroll", handleGlobalScroll);

        function handleGlobalScroll(){
            console.log('Scrolling !!');
        }
        
        return () => {
            console.log("Nettoyage de l'écouteur");
            window.removeEventListener('scroll', handleGlobalScroll);
        }
    }, []);
```



## Autre exemple

Un useEffect s'exécute toujours au montage du composant mais aussi à chaque mises à jour du state
```js
useEffect(() => {
        // useEffect s'exécute TOUJOURS au montage du composant
        // S'exécute aussi à chaque MAJ du state
        console.log('JE suis la');
        setInterval(() => {
            setElapsedTime(prevTime => prevTime + 1);
        }, 1000);
    })
```
Ici, le useEffect lance le setInterval qui mettra à jour "setElapsedTime" chaque seconde, sauf qu'en faisant comme ça, le useEffect va en fait relancer une nouvelle fois setInterval sans arrêter le précédent, ce qui signifie qu'au bout de 10 secondes, nous n'aurons pas un setInterval en marche mais dix et ainsi de suite.<br><br>

Pour remédier à cela, on ajoutera un tableau en second argument du useEffect :
```js
useEffect(() => {
        // useEffect s'exécute TOUJOURS au montage du composant
        // S'exécute aussi à chaque MAJ du state
        console.log('JE suis la');
        setInterval(() => {
            setElapsedTime(prevTime => prevTime + 1);
        }, 1000);
    }, [])
```
On appel ce tableau : "Tableau de dépendance".<br>
C'est lui qui empêchera la mise à jour du useEffect et si on relance le script, il n'y aura qu'un seul setInterval qui sera exécuté.

## Tableau de dépendance

Tableau vide = useEffect s'exécute <strong>SEULEMENT</strong> au montage du composant. Il ignore les MAJ du state