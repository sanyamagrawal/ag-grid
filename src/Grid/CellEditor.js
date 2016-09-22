import React from 'react';

class CellEditor extends React.Component {
  render() {
    // return <div>{this.props.value}</div>
    return <input type="text" value={this.props.value} readOnly></input>;
  }

  getValue() {
    return this.props.value;
  }
}

CellEditor.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

export default CellEditor;
