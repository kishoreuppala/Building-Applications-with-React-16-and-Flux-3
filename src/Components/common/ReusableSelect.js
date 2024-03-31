import React from "react";
import { PropTypes } from "prop-types";

function ReusableSelect(props) {
    let wrapperClass = "form-group";
    // if (props.error && props.error.length > 0){
    if (props.error.length > 0){
        wrapperClass += " has-error";
    }
    return (
        <div className={wrapperClass}>
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <select
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            className="form-control"
          >
            {/* <option value=""/> */}
            <option value="" disabled selected>Select Author</option>
            <option value="1">{props.option1}</option>
            <option value="2">{props.option2}</option>
          </select>
        </div>
        {/* Below <div> will be rendered if the left side condition is true */}
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    );
}

ReusableSelect.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
}

ReusableSelect.defaultProps = {
    error: ""
}

export default ReusableSelect;
