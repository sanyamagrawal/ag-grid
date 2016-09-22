import React from 'react';

class CellRenderer extends React.Component {
  constructor(props) {
    super(props);
    debugger;
  }
  render() {
      return <span>{this.props.value}</span>;
  }
}

CellRenderer.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

export default CellRenderer;
