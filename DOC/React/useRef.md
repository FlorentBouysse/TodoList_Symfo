# Hook useRef

Source useRef statique : https://www.udemy.com/course/react-formation-complete/learn/lecture/38883680#questions <br>
Source useRef dynamique : https://www.udemy.com/course/react-formation-complete/learn/lecture/38883702#questions <br><br>
Permet de sélectionner plusieurs éléments statique.

## useRef Statique

1. State: Création de la constante avec le hook useRef qu'on initialise avec un tableau vide.

```js
//#######################################
// State
    const inputsRef = useRef([]);
```

2. Behavior: Cette fonction ajoute les éléments sélectionné dans le tableau "inputsRef" <br>
<strong style="color:red"><b>NOTE</b></strong>: explication du "if(element && !inputsRef.current.includes(element))": <br>
Si l'élément existe => "element == true" en gros<br>
Et qu'il n'est pas déjà présent dans le tableau "inputsRef"
- "current" => pour l'objet courant, qui est sélectionné.
- "includes(element)" => renvoie true si l'élément est présent dans le tableau.

```js
//#######################################
// Behavior
    function addInputRef(element) {
        if(element && !inputsRef.current.includes(element)) {
            // Si l'élément existe et qu'il n'est pas déjà présent
            inputsRef.current.push(element);
        }
        console.log(inputsRef);
    }
```

3. Display: l'attribut ref={} sert à sélectionner les éléments qu'on souhaite mettre dans le tableau "inputsRef"

```js
//#######################################
// Display
  return (
    <div>
        <input ref={addInputRef} type="text" />
        <input ref={addInputRef} type="text" />
        <input ref={addInputRef} type="text" />

    </div>
  )
```

## UseRef Dynamique

Installation d'une librairie =>
```
npm i nanoid
```
Voir "src/components/cours/components/useRef/DynamincUseRef.jsx" <br>
