import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import GoogleProvider from "./GoogleProvider";
import Login from "@/pages/auth/login";
import SignUp from "@/pages/auth/signUp";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "@/redux/createView";
const ModelMui = ({ model, onClose,setModel }) => {
  const { view } = useSelector((state) => state.view);
  const dispatch = useDispatch();
  return (
    <div>
      <Modal open={model} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "1px solid grey",
            boxShadow: 24,
            px: 4,
            py: 2,
            height: "auto",
            borderRadius: "5px",
          }}
        >
          <GoogleProvider />
          <p className="text-gray-400 font-bold text-center my-2">OR</p>
          {view === "signup" ? (
            <>
              <SignUp  setModel={setModel} />
              <p className="text-gray-500">
                Already Have Reddit account?
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => dispatch(login())}
                  style={{color:'blue'}}
                >
                  Login
                </span>
              </p>
            </>
          ) : (
            <>
              <Login setModel={setModel} />
              <p>
                Already Have Reddit account?
                <span className=" cursor-pointer" style={{color:'blue'}} onClick={() => dispatch(signup())}>SignUp</span>
              </p>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModelMui;
