import CellRenderer from './CellRenderer';

const cellStyle = event => event.value.style;

const snNoRenderer = (props) => {
  return parseInt(props.rowIndex, 10) + 1;
};

const Columns = [{
    headerName: 'S.No',
    field: '',
    width:70,
    cellRenderer: snNoRenderer
  }, {
    headerName: "Drink Name",
    field: "item",
    editable: true,
    cellStyle: cellStyle,
    cellRendererFramework: CellRenderer
  }, {
    headerName: "Units Avaliable",
    field: "unit",
    editable: true,
    cellStyle: cellStyle,
    cellRendererFramework: CellRenderer
  }, {
    headerName: "Unit Amount",
    field: "amount",
    editable: true,
    cellStyle: cellStyle,
    cellRendererFramework: CellRenderer
  }, {
    headerName: "Unit Total",
    field: "total",
    editable: true,
    cellStyle: cellStyle,
    cellRendererFramework: CellRenderer
  }];

  export default Columns;
