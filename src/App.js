import React, {Component} from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid/dist/styles/ag-grid.css';
import logo from './logo.svg';
import './App.css';
import Columns from './Grid/ColumnMixin';

const typeMap = {
  1: 'left',
  2: 'center',
  3: 'right'
};

const createRowData = () => {
    var rows = [];
    'qwertyuiopasdfghjklzxcvbnm'.split('').forEach((item) => {
        rows.push({
          item: {
            value: item,
            style: {}
          }});
    });

    rows.forEach((row) => {

        row.amount = {
          value: Math.round(Math.random() * 1000),
          style: {}
        };

        row.unit = {
          value: Math.round(Math.random() * 100),
          style: {}
        };

        row.total = {
          value: row.amount.value*row.unit.value,
          style: {}
        };
    });
    return rows;
};

let currentSelectedRow;
let currentSelectedColumn;

class App extends Component {
    constructor(props) {
      super(props);
      this.state={
        data: createRowData()
      };
    }

    getGridOptions() {
      return {
          columnDefs: Columns,
          rowData: this.state.data,
          forPrint: true,
          onCellClicked: this.onCellClicked
      };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to ag-grid</h2>
                </div>

                <div className="card">
                  <button onClick={this.onAlignClick.bind(this, 1)}>Left</button>
                  <button onClick={this.onAlignClick.bind(this, 2)}>Center</button>
                  <button onClick={this.onAlignClick.bind(this, 3)}>Right</button>
                  <br />
                  <AgGridReact ref="grid" {...this.getGridOptions()} />
                </div>
            </div>
        );
    }

    onCellClicked = (event) => {
      currentSelectedRow = event.rowIndex;
      currentSelectedColumn = event.colDef.field;
    }

    onAlignClick(alignmentType) {
      // const data = this.state.data.slice(0);
      // data[currentSelectedRow][currentSelectedColumn].style.textAlign = typeMap[alignmentType];
      // this.setState({
      //   data: data
      // });

      if (!currentSelectedColumn) {
        return;
      }

      const updatedNodes = [];
      const gridAPI = this.refs.grid.api;

      gridAPI.forEachNode( (node) => {
        if (node.childIndex !== currentSelectedRow) return;
        node.data[currentSelectedColumn].style.textAlign = typeMap[alignmentType];
        updatedNodes.push(node);
      });

      gridAPI.refreshCells(updatedNodes, [currentSelectedColumn]);
    }
}

export default App;
