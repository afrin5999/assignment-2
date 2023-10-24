import "./App.css";
import React, { Suspense, lazy } from "react";
import { Typography } from "@mui/material";
const RouteIndex = lazy(() => import("./route/index"));
const App=()=> {
  return (
    <Suspense fallback={<Typography>Loading...</Typography>} timeout={1000}>
      <RouteIndex />
    </Suspense>
  );
}

export default App;
