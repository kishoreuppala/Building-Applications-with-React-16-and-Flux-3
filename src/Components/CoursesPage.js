import React from "react";
import {getCourses} from "../api/courseApi";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CoursesPage extends React.Component {
    state = {
        courses: []
    };

componentDidMount() {
    getCourses().then(courses => this.setState({ courses: courses }));
}

render () {
    return (
    <>
    
    <Link to="/course" class="btn btn-primary float-right">Add Course</Link>
    <div className="clearfix"></div> {/*  is added after the link to clear the floating elements and ensure proper layout. */}
    <h2>Courses</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Authror ID</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            {this.state.courses.map(course => {
            return ( 
                <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>{course.authorId}</td>
                    <td>{course.category}</td>
                </tr> 
            );
                })
            }
        </tbody>
    </table>
    </>
    );
} 
}

export default CoursesPage;