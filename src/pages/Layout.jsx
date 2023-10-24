import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;
const navItems = [
  {
    path: "/",
    name: "Home",
    isLoggedIn: null,
  },
  {
    path: "/login",
    name: "Login",
    isLoggedIn: null,
  },
  {
    path: "/register",
    name: "Register",
    isLoggedIn: null,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    isLoggedIn: true,
  },
];

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const login_flag = JSON.parse(localStorage.getItem("login_flag"));

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("login_flag");
    navigate("/login");
  };
  console.log(login_flag);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems
          .filter((i) => i.isLoggedIn === login_flag)
          .map((item, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#84361b",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              display: { xs: "none", sm: "block" },
            }}
          >
            User Management System
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems
              .filter((i) => i.isLoggedIn === login_flag)
              .map((item, index) => {
                return (
                  <Link
                    key={index}
                    variant="button"
                    sx={{ margin: 2, color: "#fff" }}
                    onClick={() => navigate(item.path)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            {login_flag === true && (
              <Link
                variant="button"
                sx={{ margin: 2, color: "#fff" }}
                onClick={handleLogout}
              >
                <LogoutIcon />
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, textAlign: "left" }}>
        <Toolbar />
        {children}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
