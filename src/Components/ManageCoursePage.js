import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as CourseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = props => {

    const [errors, setErrors] = useState({});

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
        //If form is not valid, return nothing
        if(!formIsValid()) return;
        //call api
        CourseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            //Display success message
            toast.success("Course Added");
        });
    }
    
    function formIsValid() {
        const _errors = {}; //intentionally used _errors local variable just to not conflict with useStage "errors" var.
        if(!course.title) _errors.title="Title is required";
        if(!course.authorId) _errors.authorId="Author is required";
        if(!course.category) _errors.category="Category is required";

        setErrors(_errors); //Update errors
        //Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
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
            <CourseForm errors={errors} course={course} onChange={handleChange} onSubmit={handleSubmit} />
        </>
    );
};

export default ManageCoursePage;    