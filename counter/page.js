"use Client"


import React, { useState } from "react";
import Counter from "./counter";

export default function CounterPage() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <main>
            {/* <p>{counter}</p>
            <button onClick={incrementCounter}>Increment Counter</button> */}
            Counter curCount={Counter}; IncFunc={incrementCounter};
        </main>
    );
}


