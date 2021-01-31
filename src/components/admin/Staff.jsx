import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import ToggleOffOutlinedIcon from "@material-ui/icons/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@material-ui/icons/ToggleOnOutlined";

// import USERS_DATA  from '../../util/userData';
// const staffs = USERS_DATA[0];
// const staffsData = staffs.customers;

const Staff = () => {
  // const [users, setUsers] = useState(staffsData)
  const [state, setState] = useState({
    columns: [
      { title: "Staff ID", field: "staff_id" },
      { title: "Name", field: "firstName" },
      { title: "Surname", field: "lastName" },
      // { title: 'Account Number', field: 'accountNumber', type: 'numeric', editable: 'never' },
      // { title: 'Account Type', field: 'accountType', lookup: { 'Savings': 'Savings', 'Current': 'Current' } },
      // { title: 'Balance', field: 'balance', type: 'numeric' },
      { title: "Line Manager", field: "line_manager" },
      { title: "Exam", field: "examLeave" },
    ],
    data: [],
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
      const result = await axios("http://localhost:8081/auth/allUsers");
      console.log(result.data.data);
      setState({
        columns: [
          { title: "Staff ID", field: "staff_id", editable: "never" },
          { title: "Name", field: "firstName" },
          { title: "Surname", field: "lastName" },
          { title: "Line Manager", field: "line_manager" },
          { title: "Exam", field: "examLeave" },
          { title: "Sick", field: "sickLeave" },
          { title: "Annual", field: "annualLeave" },
        ],

        data: result.data.data,
      });
    }
    fetchData();
  }, []);
  return (
    <MaterialTable
      title="Account"
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

                // axios
                // .post("http://localhost:8081/auth/OneUser", newData)
                // .then((res) => {
                //   console.log(res.data.data);
                //   const resData = [...data, res.data.data];
                //   setState({ ...state, data: resData });
                // });

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

                  axios
                    .put("http://localhost:8081/auth/OneUser", newData)
                    .then((res) => console.log(res.data))
                    .catch((e) => console.log(e));

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
                axios
                .delete("http://localhost:8081/auth/OneUser")
                .then(res => console.log(res.data));
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
        search: true,
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

export default Staff;
