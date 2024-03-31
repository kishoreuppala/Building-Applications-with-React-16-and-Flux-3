import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as CourseApi from "../api/courseApi";
import { toast } from "react-toastify";

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
    };

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the page from posting back to the server.
        //call api
        CourseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            //Display success message
            toast.success("Course Added");
        });
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
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
        </>
    );
};

export default ManageCoursePage;    