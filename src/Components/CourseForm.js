import React from "react";
import TextInput from "./common/TextInput";
import ReusableSelect from "./common/ReusableSelect";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
          <TextInput
            id="title"
            type="text"
            name="title"
            label="Title"
            onChange={props.onChange}
            value={props.course.title}
            error={props.errors.title}
          />

          <ReusableSelect
            id="author"
            name="authorId"
            label="Author"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
            option1="Uppala Kishore"
            option2="Joshith Sravan"
            error={props.errors.authorId}
          />

          <TextInput
            id="category"
            name="category"
            label="Category"
            onChange={props.onChange}
            value={props.course.category}
            error={props.errors.category}
          />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default CourseForm;
