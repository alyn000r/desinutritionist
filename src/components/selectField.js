import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class MySelectField extends React.Component {

  constructor(props) {
    super(props);

    this.value = null;
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const fullWidth = this.props.fullWidth;
    const menu = this.props.menu;
    const defaultValue = this.props.menu[0].value;
    const value = (this.state && this.state.value) ? this.state.value : defaultValue;
    const floatingLabel = this.props.floatingLabel;

    return (
      <SelectField
        floatingLabelText={floatingLabel}
        value={value}
        onChange={this.handleChange}
        fullWidth={fullWidth}
      >
        {menu.map((menuItem,i) =>
          <MenuItem value={menuItem.value} primaryText={menuItem.primaryText}
            key={i}
            {...menuItem}
          />
        )}
      </SelectField>
      )
  }
}

MySelectField.propTypes = {
  fullWidth: PropTypes.bool.isRequired,
  menu: PropTypes.array.isRequired,
  floatingLabel: PropTypes.string.isRequired
};