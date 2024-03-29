import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function HomePage() {
    return <div className='jumbotron'>
        <h1>Pluralsight React Course</h1>
        <p>React, Flux, and React Router for ultra responsive web apps.</p>
        {/* <a href="/about">About</a> */}
        <Link to="about" className="btn btn-primary">About</Link>
    </div>
}


export default HomePage;

//We could export just the home page without the default keyword, but traditionally, if only a single item is being exported from a file, you will use a default export. The benefit of a default export is, it requires a little less code to import, and the file doing the import can decide what to name that import.