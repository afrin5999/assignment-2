import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/" sx={{ color: "#84361b" }}>
        User Management System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.


const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    full_name: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    // Create empty object with let variable as it is block scoped
    let data = {};

    // Retrieve the item using getItem
    const user_list_array = localStorage.getItem("user_list");

    // Check if the array exists in local storage and Parse the JSON string into a JavaScript array
    let list_array = user_list_array ? JSON.parse(user_list_array) : [];

    if (list_array.length != 0) {
      let last_id = list_array.length;
      last_id++;

      data["id"] = last_id;
      data["full_name"] = inputs.full_name;
      data["username"] = inputs.username;
      data["password"] = inputs.password;

      // Push the new object into the array
      list_array.push(data);

      // Convert the updated array back to a JSON string
      localStorage.setItem("user_list", JSON.stringify(list_array));
    } else {
      // Create empty array
      const list_array = [];

      let first_id = 1;
      data["id"] = first_id;
      data["full_name"] = inputs.full_name;
      data["username"] = inputs.username;
      data["password"] = inputs.password;

      // Push the new object into the array
      list_array.push(data);

      // Convert the updated array back to a JSON string
      localStorage.setItem("user_list", JSON.stringify(list_array));
    }
    setInputs({
      full_name: "",
      username: "",
      password: "",
    });
    navigate("/login");
  };

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#84361b" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="full_name"
                  required
                  fullWidth
                  id="full_name"
                  label="Full Name"
                  type="text"
                  value={inputs.full_name}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  type="text"
                  value={inputs.username}
                  onChange={handleChange}
                  autoComplete="user-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={inputs.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#84361b" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Layout>
  );
};

export default Register;
