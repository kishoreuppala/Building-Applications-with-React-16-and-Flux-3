import React from "react";

function CourseForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            onChange={props.onChange}
            className="form-control"
            value={props.course.title}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            {/* <option value=""/> */}
            <option value="" disabled selected>Select Author</option>
            <option value="1">Uppala Kishore</option>
            <option value="2">Joshith Sravan</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            onChange={props.onChange}
            className="form-control"
            value={props.course.category}
          />
        </div>
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
