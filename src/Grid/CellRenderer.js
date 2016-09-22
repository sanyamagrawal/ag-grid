import React from 'react';

class CellRenderer extends React.Component {
  render() {
    return <span>{this.props.value.value}</span>;
  }
}

export default CellRenderer;
