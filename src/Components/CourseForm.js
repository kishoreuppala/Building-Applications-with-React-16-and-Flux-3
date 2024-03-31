import React from "react";
import TextInput from "./common/TextInput";
import ReusableSelect from "./common/ReusableSelect";

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
          />

          <TextInput
            id="category"
            name="category"
            label="Category"
            onChange={props.onChange}
            value={props.course.category}
          />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
