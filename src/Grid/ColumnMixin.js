
const typeMap = {
  1: 'left',
  2: 'center',
  3: 'right'
};

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
  }, ,{
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

export default columnDefs;
