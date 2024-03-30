import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

//Given a route like this
<Route path="/course/:slug" component={Course} />;


//And a URL like this
myapp.com/course/clean-code?module=3

//Props will be 
function Course(props) {
    return (
        <div>
        {/* Accessing and using the properties */}
        <p>Slug: {props.match.params.slug}</p>                  {/* //clean-code */}
        <p>Query: {JSON.stringify(props.location.query)}</p>    {/* //{ module: 3 } */}
        <p>Pathname: {props.location.pathname}</p>              {/*  /course/clean-code/?module=3 */}
        </div>
    );
}

export default Course;