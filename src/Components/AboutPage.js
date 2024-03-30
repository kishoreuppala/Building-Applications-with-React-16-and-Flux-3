import React from 'react';
import ExampleUseState from './others/useStateExample';
import ExampleUseEffect from './others/useEffectExample';
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min';

class AboutPage extends React.Component {
    render() {
        return (
        <>
            <h2>About</h2>
            <p>This is about section and this app user React</p>
            <span>Email: </span><ExampleUseState />
            
            <br /><ExampleUseEffect />

            {/* Test Prompt */}
            <Prompt when={true} message="Are you sure you want to redirect?" />
        </>
        );
    }
}

export default AboutPage;