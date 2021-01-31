import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
    height: "800.1px",
    margin: "50px auto",
    padding: "20px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
  },
  signIn: {
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
  },
  form: {
    width: "100%",
    padding: theme.spacing(1, 6),
  },
  label: {
    fontSize: "15px",
  },

  accountFormControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  margin: {
    marginBottom: "-150px",
  },
  text: {
    fontSize: "12px",
    color: theme.palette.secondary.main,
  },
  title: {
    marginTop: "50px",
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
  error: {
    textAlign: "center",
    fontSize: "30px",
    color: "red",
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

function Register() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: "",
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

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      type,
    } = state;
    if (!firstName) {
      return setError("*Full name is required");
    }
    if (!lastName) {
      return setError("*Username is required");
    }
    if (!email) {
      return setError("*Email is required");
    }

    if (!password) {
      return setError("*Password is required");
    }
    if (!confirmPassword) {
      return setError("*Confirm Password is required");
    }
    if (!type) {
      return setError("*Please select account type");
    }

    if (state.password === state.confirmPassword) {
      setLoading(true);
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        type,
      };
      // axios
      //   .post(API_BASE_URL + "/signup", newUser)
      //   .then((response) => {
      //     console.log(response)
      //     if (response.status === 201 || response.status === 200) {
      //       localStorage.setItem(
      //         ACCESS_TOKEN_NAME,
      //         JSON.stringify(response.data.data)
      //       );
      //       setLoading(false);
      //       history.push("/subscription-plans");
      //       // window.location.reload();
      //     } else {
      //       setError("Some errors ocurred while registering your account");
      //     }
      //   })
      //   .catch((err) => {
      //     setError(err);
      //     setLoading(false);
      //   });
    } else {
      setError("Passwords do not match");
    }
  };
  // const handletypeChange = (event) => {
  //   settype(event.target.value);
  // };

  return (
    <div>
      <NavigationHeader />
      <div className={classes.root}>
        <CssBaseline />
        {/* <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item xs={2}>
            <Link href="/signin" variant="body2">
              <Typography className={classes.signIn}>SIGN IN</Typography>
            </Link>
          </Grid>
        </Grid> */}
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4} className={classes.margin}>
            {/* <AccountCircleIcon className={classes.icon} /> */}
          </Grid>
        </Grid>

        <div className={classes.paper}>
          <Typography component="h1" variant="h5" className={classes.title}>
            Sign up
          </Typography>
          <Typography component="h1" variant="h5" className={classes.subtitle}>
            Create your account
          </Typography>

          {error ? (
            error.isArray() ? (
              error.map((err) => (
                <div key={err.message}>
                  <Typography
                    component="h1"
                    variant="h5"
                    className={classes.error}
                  >
                    {err.message}
                  </Typography>
                </div>
              ))
            ) : (
              <Typography component="h1" variant="h5" className={classes.error}>
                {error}
              </Typography>
            )
          ) : null}
          {/* // {error ? (
              //   <Typography component="h1" variant="h5" className={classes.error}>
              //     {error}
              //   </Typography>
              // ) : null} */}

          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="first-name"
                  className={classes.label}
                  value={state.firstName}
                  onChange={handleChange("firstName")}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="last-name"
                  className={classes.label}
                  value={state.lastName}
                  onChange={handleChange("lastName")}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={state.email}
                  onChange={handleChange("email")}
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  value={state.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.accountFormControl}>
                  <InputLabel id="type">Account Type</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="type"
                    id="type"
                    value={state.type}
                    onChange={handleChange("type")}
                  >
                    <MenuItem value={"individual"}>Staff</MenuItem>
                    <MenuItem value={"line_manager"}>Line Manager</MenuItem>
                    <MenuItem value={"administrator"}>
                      Administrator
                    </MenuItem>
                  </Select>
                </FormControl>
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
              Sign Up
              {loading && <CircularProgress />}
            </Button>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Typography className={classes.signIn}>
                  You already have an account?
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Link href="/signin" variant="body2">
                  <Typography className={classes.signIn}>SIGN IN</Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
