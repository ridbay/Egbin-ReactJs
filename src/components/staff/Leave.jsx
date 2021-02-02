import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@material-ui/icons/ToggleOnOutlined";

import USERS_DATA from "../../util/userData";
const {leaves} = USERS_DATA;
const randomNumber = Math.floor((Math.random() * 3) +1);
const Leave = () => {
  const [state, setState] = useState({
    columns: [
      { title: "Staff ID", field: "staff_id", type: "numeric" },
      { title: "Name", field: "firstName" },
      { title: "Surname", field: "lastName" },
      { title: "Status", field: "status" },
      { title: "Requested", field: "date_requested"},
      { title: "Approved", field: "date_approved"},
      { title: "Before", field: "initial_balance"},
      { title: "Leave Balance", field: "final_balance"}
    ],
    data: [leaves[randomNumber]],
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
