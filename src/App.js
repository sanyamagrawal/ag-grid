import React, {Component} from 'react';
import { AgGridReact } from 'ag-grid-react';

import logo from './logo.svg';
import './App.css';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-blue.css';
import CellRenderer from './Grid/CellRenderer';
import CellEditor from './Grid/CellEditor';


const typeMap = {
  1: 'left',
  2: 'center',
  3: 'right'
};

const alignMap = {};

const cellStyle = (event) => {
  let alignType;

  const key = `${event.node.childIndex}_${event.column.colId}`;
  const align = alignMap[key];

  if (!align) {
    return {};
  }

  alignType = typeMap[align];
  return {
    'text-align': alignType,
    'textAlign': alignType
  };
};

const snNoRenderer = (props) => {
  return parseInt(props.rowIndex, 10) + 1;
};

const columnDefs = [{
    headerName: 'S.No',
    field: '',
    width:70,
    cellRenderer: snNoRenderer
  }, {
    headerName: "Drink Name",
    field: "item",
    editable: true,
    cellStyle: cellStyle,
    cellRendererFramework:CellRenderer,
    cellEditorFramework: CellEditor
  }, {
    headerName: "Units Avaliable",
    field: "unit",
    editable: true,
    cellStyle: cellStyle,
    cellRendererFramework:CellRenderer,
    cellEditorFramework: CellEditor
  }, {
    headerName: "Unit Amount",
    field: "amount",
    editable: true,
    cellStyle: cellStyle,
    cellRendererFramework:CellRenderer,
    cellEditorFramework: CellEditor
  }, {
    headerName: "Unit Total",
    field: "total",
    editable: true,
    cellStyle: cellStyle,
    cellRendererFramework:CellRenderer,
    cellEditorFramework: CellEditor
  }];

const createRowData = () => {
    var rows = [];
    ['Ales', 'Larger', 'Cider', 'Wine', 'Spirits'].forEach((item) => {
        rows.push({category: 'Alcoholic Drinks', item: item});
    });

    rows.forEach((row) => {
        row.amount = Math.round(Math.random() * 1000);
        row.unit = Math.round(Math.random() * 100);
        row.total = row.amount*row.unit;
    });
    return rows;
};

let currentSelectedRow;
let currentSelectedColumn;

const gridOptions = {
    columnDefs: columnDefs,
    rowData: createRowData(),
    forPrint: true,
    onCellClicked: (event) => {
      currentSelectedRow = event.rowIndex;
      currentSelectedColumn = event.colDef.field;
    }
};


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to ag-grid</h2>
                </div>

                <div className="card">
                  <button data-type="1" onClick={this.onAlignClick.bind(this, 1)}>Left</button>
                  <button data-type="2" onClick={this.onAlignClick.bind(this, 2)}>Center</button>
                  <button data-type="3" onClick={this.onAlignClick.bind(this, 3)}>Right</button>
                  <AgGridReact ref="grid" {...gridOptions} />
                </div>
            </div>
        );
    }

    onAlignClick(alignmentType) {
      alignMap[`${currentSelectedRow}_${currentSelectedColumn}`] = alignmentType;
      this.refs.grid.api.startEditingCell({
          rowIndex: currentSelectedRow,
          colKey: currentSelectedColumn,
          type:1
      });
    }
}

export default App;
