import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
    const [course, setCourse] = useState({
        id: null,
        slug: "",
        titile: "",
        authordId: null,
        category: ""
    });

    function handleChange(event) {
        // debugger;
        const updatedCourse = {...course, [event.target.name]: event.target.value};
        setCourse(updatedCourse);
    }
    
    //(OR) we can use following code as well to handleChange()
    // function handleChange({target}) {
    //     setCourse({
    //         ...course,
    //         [target.name]=target.value
    //     });
    // }

    return (
        <>
            <h2>Manage Course</h2>
            {/* {props.match.params.slug} */}
            <CourseForm course={course} onChange={handleChange} />
        </>
    );
};

export default ManageCoursePage;    