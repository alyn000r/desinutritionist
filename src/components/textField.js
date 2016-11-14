import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

export default class MyTextField extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const hintText = this.props.hintText;
    const errorText = this.props.errorText;
    const fullWidth = this.props.fullWidth;
    return (
      <TextField
        hintText={hintText}
        errorText={errorText}
        fullWidth={fullWidth}
      />
    )
  }
}

MyTextField.propTypes = {
  hintText: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  fullWidth: PropTypes.bool.isRequired
};