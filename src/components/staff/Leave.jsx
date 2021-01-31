import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@material-ui/icons/ToggleOnOutlined";

import USERS_DATA from "../../util/userData";
const [staffs] = USERS_DATA;
const staffsData = staffs.customers;
const Leave = () => {
  const [state, setState] = useState({
    columns: [
      { title: "Staff ID", field: "id", type: "numeric" },
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Status", field: "status" },
      { title: "Requested", field: "requested" },
      { title: "Approved", field: "approved" },
      { title: "Before", field: "initialBalance" },
      // { title: 'Account Number', field: 'accountNumber', type: 'numeric', editable: 'never' },
      // { title: 'Account Type', field: 'accountType', lookup: { 'Savings': 'Savings', 'Current': 'Current' } },
      // { title: 'Balance', field: 'balance', type: 'numeric' },
      //   { title: 'Line Manager', field: 'line_manager'},
      { title: "Leave Balance", field: "leave_balance" },
    ],
    data: staffsData,
  });

  const [isActivated, setIsActivated] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const activatePopUp = (isActivated, rowData) => {
    isActivated
      ? alert("You want to Deactivate " + rowData.length + " accounts")
      : alert("You want to Activate " + rowData.length + " accounts");
  };


  useEffect(() => {
    async function fetchData() {
      const token = await localStorage.getItem("token");
      const jsonParsed = JSON.parse(token);
      const result = await axios("http://localhost:8081/leave/allLeavesOneUser", {
        headers: {
          Authorization: `Bearer ${jsonParsed}`,
        },
      });
      console.log(result.data.data);
      setState({
        columns: [
          { title: "Staff ID", field: "staff_id", editable: 'never' },
          { title: "Type", field: "type" , editable: 'never' },
          { title: "Status", field: "status" , editable: 'never' },
          { title: "Requested", field: "date_requested" , editable: 'never' },
          { title: "Approved", field: "date_approved" , editable: 'never' },
          { title: "Before", field: "initial_balance" , editable: 'never' },
          { title: "Leave Balance", field: "final_balance" , editable: 'never' },
        ],
        data: result.data.data,
      });
    }
    fetchData();
  }, []);
  return (
    <MaterialTable
      title="Leave History"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      actions={[
        (rowData) => ({
          tooltip: "Deactivate All Selected Accounts",
          icon: isActivated ? ToggleOffOutlinedIcon : ToggleOnOutlinedIcon,
          onClick: (evt, rowData) => {
            setIsActivated(!isActivated);
            setSelectedRow(rowData);
            activatePopUp(isActivated, rowData);
          },
        }),
      ]}
      options={{
        selection: true,
        rowStyle: (rowData) => ({
          backgroundColor:
            selectedRow && selectedRow[0].tableData.id === rowData.tableData.id
              ? "#ffcccc"
              : "#FFF",
        }),
      }}
    />
  );
};

export default Leave;
