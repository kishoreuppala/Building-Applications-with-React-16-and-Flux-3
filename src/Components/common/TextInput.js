import React from "react";
import { ReactPropTypes } from "react";

function TextInput(props) {
    let wrapperClass = "form-group";
    if (props.error && props.error.length > 0){
        wrapperClass += " has-error";
    }
    render(
        <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            name={props.name}
            onChange={props.onChange}
            className="form-control"
            value={props.value}
          />
        </div>
        {/* Below <div> will be rendered if the left side condition is true */}
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    );
}

TextInput.ReactPropTypes = {
    id: ReactPropTypes.string.isRequired,
    name: ReactPropTypes.string.isRequired,
    label: ReactPropTypes.string.isRequired,
    onChange: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string,
    error: ReactPropTypes.string
}

TextInput.defaultProps = {
    error: ""
}

export default TextInput;