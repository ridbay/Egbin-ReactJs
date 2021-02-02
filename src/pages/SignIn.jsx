import React, { useState } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import BackgroundImage from "../img/thermal-power-plant.jpeg";
import NavigationHeader from "../components/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "1000px",
    background: `url(${BackgroundImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
  },

  paper: {
    width: "628.4px",
    height: "553px",
    margin: "50px auto",
    padding: "20px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
  },
  signIn: {
    // textAlign: "right",
    color: "white",
    fontSize: "25px",
    lineHeight: "25px",
    margin: "71px auto",
  },
  register: {
    // textAlign: "right",
    color: "secondary",
    fontSize: "25px",
    lineHeight: "25px",
    margin: "71px auto",
  },
  icon: {
    fontSize: "150px",
    color: theme.palette.primary.main,
    marginLeft: 130,
    // marginBottom: "-500",
  },
  error: {
    textAlign: "center",
    fontSize: "30px",
    color: "red",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // margin: theme.spacing(3, 1, 100, 1),
    padding: theme.spacing(1, 6),
  },
  label: {
    fontSize: "15px",
  },

  accountFormControl: {
    margin: theme.spacing(1),
    width: "100%",
    // minWidth: 120,
  },
  margin: {
    marginBottom: "-150px",
  },
  text: {
    fontSize: "12px",
    color: theme.palette.secondary.main,
  },
  title: {
    marginTop: "40px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "30px",
    color: theme.palette.secondary.main,
  },
  subtitle: {
    textAlign: "center",
    fontSize: "20px",
    color: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: "2px",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "20px",
    textAlign: "center",
    // width: "440.54px",
    height: "59.53px",
  },
}));

function SignIn() {
  const history = useHistory();
  const classes = useStyles();

  const [state, setState] = useState({
    staff_id: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const { staff_id, password } = state;

    if (!staff_id) {
      return setError("*Staff ID is required");
    }

    if (!password) {
      return setError("*Password is required");
    }
    if (staff_id === "admin" && password === "password") {
      history.push("admin/dashboard");
    } else if (staff_id === "staff" && password === "password") {
      history.push("staff/dashboard");
    } else {
      setError("Username and password do not match");
    }

    // const user = {
    //   staff_id,
    //   password,
    // };
    // axios
    //   .post("http://localhost:8081/auth/signin", user)
    //   .then((response) => {
    //     console.log("Response from server", response.data);
    //     setLoading(false)
    //     if (response.status === 200 || response.status === 201) {
    //       localStorage.setItem("user",JSON.stringify(response.data.data));
    //       localStorage.setItem("token",JSON.stringify(response.data.token));
    //       history.push('staff/dashboard')
    //     }
    //     else if(response.data.code === 204){
    //       setError("Username and password do not match");
    //   }else if(response.data.code === 404){
    //     setError("Email does not exist");
    // }else {
    //       setError("Some errors ocurred while registering your account");
    //     }
    //   })
    //   .catch((err) => {
    //     // console.log(err.message);
    //     setError(err.message);
    //     setLoading(false)
    //   });
  };

  // const handleAccountTypeChange = (event) => {
  //   setAccountType(event.target.value);
  // };

  return (
    <div>
      <NavigationHeader />
      <div className={classes.root}>
        <CssBaseline />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4} className={classes.margin}>
            {/* <AccountCircleIcon className={classes.icon} /> */}
          </Grid>
        </Grid>

        <div className={classes.paper}>
          <Grid container>
            <Grid item lg={6}>
              <Typography component="p" variant="inherit">
                Admin Log-In <br />
                Staff ID: admin, <br />
                Password: password
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography component="p" variant="inherit">
                Staff Log-In <br />
                Staff ID: staff, <br />
                Password: password
              </Typography>
            </Grid>
          </Grid>
          <Typography component="h1" variant="h5" className={classes.title}>
            Sign In
          </Typography>
          <Typography component="h1" variant="h5" className={classes.subtitle}>
            Log into your account
          </Typography>
          {error ? (
            <Typography component="h1" variant="h5" className={classes.error}>
              {error}
            </Typography>
          ) : null}
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  id="staff_id"
                  label="Staff ID"
                  name="staff_id"
                  autoComplete="staff_id"
                  value={state.staff_id}
                  onChange={handleChange("staff_id")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={state.password}
                  onChange={handleChange("password")}
                  // helperText={error.password}
                  // error={error.password ? true:false}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
            >
              LOGIN
              {loading && <CircularProgress />}
            </Button>
          </form>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Typography className={classes.register}>
                You do not have an account?
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Link href="/signup" variant="body2">
                <Typography className={classes.register}>SIGN UP</Typography>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
