import { Alert, Snackbar } from "@mui/material";
import React from "react";
import Alerts from "./Alerts";

const Toast = ({toast,time,massage,varient}) => {
  return (
    <div>
      <Snackbar open={toast} autoHideDuration={time || 2000} >
        <Alerts  varient={varient} sx={{ width: "100%" }}>
          {massage}
        </Alerts>
      </Snackbar>
    </div>
  );
};

export default Toast;
