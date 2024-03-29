import React from 'react';
import ExampleUseState from './others/useStateExample';
import ExampleUseEffect from './others/useEffectExample';

class AboutPage extends React.Component {
    render() {
        return (
        <>
            <h2>About</h2>
            <p>This is about section and this app user React</p>
            <span>Email: </span><ExampleUseState />
            
            <br /><ExampleUseEffect />
        </>
        );
    }
}

export default AboutPage;