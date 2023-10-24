import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Layout from "./Layout";

const Dashboard = () => {
  const user_list_array = localStorage.getItem("user_list");
  const list_array = user_list_array ? JSON.parse(user_list_array) : [];

  const login_id = parseInt(localStorage.getItem("login_id"));
  const foundUser = list_array.find((obj) => obj.id === login_id) || {};

  return (
    <Layout>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "#1976d2",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(../src/assets/photo1.jpeg)`,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Welcome to Dashboard {foundUser.full_name}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what's most interesting in this
                post's contents.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
};

export default Dashboard;
