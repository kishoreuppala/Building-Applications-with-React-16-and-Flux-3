import React, {useState} from "react";

//useState Example
function ExampleUseState() {
    const [email, setEmail] = useState("");

    return (
        <input
            type="text"
            placeholder="Enter Email..."
            value={email}
            onChange={event => setEmail(event.target.value)}
            />
    );
}

export default ExampleUseState;