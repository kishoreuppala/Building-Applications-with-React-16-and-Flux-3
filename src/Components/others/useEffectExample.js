import React from 'react';
import { useState,useEffect } from 'react';

//useEffect Example
function ExampleUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            {/* <p>You clicked {count} times...</p> */}
            {count > 0 && <p>You clicked {count} times...</p>}
            <button onClick={()=> setCount(count + 1)}  class="btn btn-primary">Click me</button>
        </div>
    );
}

export default ExampleUseEffect;