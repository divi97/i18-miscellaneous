import React from 'react';
import MaterialTable from 'material-table'
import Container from '@material-ui/core/Container'
import { forwardRef } from 'react';
import { withStyles } from '@material-ui/core/styles'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import Switch from '@material-ui/core/Switch';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};


const PurpleSwitch = withStyles({
  switchBase: {
    color: '#e67e22',
    '&$checked': {
      color: '#e67e22',
    },
    '&$checked + $track': {
      backgroundColor: '#e67e22',
    },
  },
  checked: {},
  track: {},
})(Switch);


function Table() {

  var columns = [
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'BirthYear', field: 'birthYear', type: 'numeric' },
    { title: 'Birth City', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa', 1: 'Delhi' } },
    {title: 'Status', field: 'status'}
  ]

  var data = [{ name: 'Divyansh', surname: 'Aggarwal', birthYear: 1997, birthCity: 1, status: <PurpleSwitch/> }]

  return (<>
    <Container>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          title="Demo Title"
          columns={columns}
          data={data}
          icons={tableIcons}
          localization = {{
            header: {
            actions: 'Yoooo'
          }}}
          actions={[
            {
              icon: CreateOutlinedIcon,
              tooltip: 'Edit User',
              onClick: (event, rowData) => alert("You edited " + rowData.name)
            },
            {
              icon: SaveOutlinedIcon,
              tooltip: 'Save User',
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            },
            {
              icon: tableIcons.Delete,
              tooltip: 'Delete User',
              onClick: (event, rowData) => alert("You want to delete " + rowData.name)
            }
          ]}
          options={{
            actionsColumnIndex: -1
          }}

        />
      </div>
    </Container>
  </>
  )
}

export default Table