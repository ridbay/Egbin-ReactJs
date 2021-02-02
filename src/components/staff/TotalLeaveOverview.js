import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import USERS_DATA from "../../util/userData";
const {leaves} = USERS_DATA;
const demoleaves = leaves;


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalLeaveOverview() {
  const classes = useStyles();
  const [leaves, setLeaves] = useState(demoleaves);

  useEffect(() => {
    async function fetchData() {
      const token = await localStorage.getItem("token");
      const jsonParsed = JSON.parse(token);
      const result = await axios.get("http://localhost:8081/leave/allLeavesOneUser", {
        headers: {
          Authorization: `Bearer ${jsonParsed}`,
        },
      });
      console.log(result.data.data);
      setLeaves(result.data.data);
    }
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Title>Total Leave Requests</Title>
      <Typography component="p" variant="h4">
        {leaves.length - 3}
      </Typography>
      <Typography
        color="textSecondary"
        className={classes.depositContext}
      ></Typography>
      <Typography
        color="textSecondary"
        className={classes.depositContext}></Typography>
      <div>
        <Link color="primary" href="/staff/leaves">
          View Leave requests
        </Link>
      </div>
    </React.Fragment>
  );
}
