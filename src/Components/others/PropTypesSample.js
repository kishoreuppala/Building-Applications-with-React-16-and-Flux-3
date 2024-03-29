import PropTypes from 'prop-types';

// Example propType declaration
CoursePage.propTypes = {
    author: propTypes.object.isRequired,
    onSave: propTypes.func.isRequired,
    validate: propTypes.func.isRequired,
    errors: propTypes.object,
    hasErrors: propTypes.func.isRequired
};

//Default props
CoursePage.defaultProps = {
    errors: {}
};