import React, { useRef } from 'react';

export default function StaticUseRef() {
//#######################################
// State
    const inputsRef = useRef([]);
    // console.log(inputsRef);

//#######################################
// Behavior
    function addInputRef(element) {
        if(element && !inputsRef.current.includes(element)) {
            // Si l'élément existe et qu'il n'est pas déjà présent
            inputsRef.current.push(element);
            // console.log(element);
        }
        // console.log(inputsRef);
    }

//#######################################
// Display
  return (
    <div>
        <input ref={addInputRef} type="text" />
        <input ref={addInputRef} type="text" />
        <input ref={addInputRef} type="text" />

    </div>
  )
}
