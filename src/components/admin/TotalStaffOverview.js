import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import USERS_DATA from "../../util/userData";
const {staffs} = USERS_DATA;
const demostaffs = staffs

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalStaffOverview() {
  const classes = useStyles();
  const [staffs, setStaffs] = useState(demostaffs);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://localhost:8081/auth/allUsers");
      setStaffs(result.data.data);
    }
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Title>Total Staff Members</Title>
      <Typography component="p" variant="h4">
        {staffs.length}
      </Typography>
      <Typography
        color="textSecondary"
        className={classes.depositContext}
      ></Typography>
      <Typography
        color="textSecondary"
        className={classes.depositContext}
      ></Typography>

      <div>
        <Link color="primary" href="/admin/leaves">
          View All Staff Members
        </Link>
      </div>
    </React.Fragment>
  );
}
