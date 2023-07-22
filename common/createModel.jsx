import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { pink } from "@mui/material/colors";
import { MdPublic } from "react-icons/md";
import { AiFillEyeInvisible, AiOutlineLock } from "react-icons/ai";
const CreateModel = ({ model, closeModel }) => {
  const [type, setType] = useState("public");
  console.log("type", type);
  const handleType = (e) => {
    setType(e.target.name);
  };
  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Modal open={model} onClose={closeModel}>
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "1px solid grey",
            boxShadow: 24,
            px: 1.5,
            py: 1,
            height: "auto",
            borderRadius: "5px",
          }}
        >
          <form className="flex flex-col" onSubmit={submitHandle}>
            <p className="text-center text-xl font-semibold mb-2 mt-2">
              create Community
            </p>
            <span className="my-2">
              <TextField
                type="text"
                size="small"
                fullWidth
                placeholder="community Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">r/</InputAdornment>
                  ),
                }}
              />
            </span>
            {/* ckeckbox */}
            <span className="flex items-center space-x-1">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="public"
                name="public"
                onChange={handleType}
                checked={type === "public"}
                sx={{ color: "black", marginRight: "0px" }}
              />
              <MdPublic size={22} className="text-gray-500" />
              <p className="text-sm text-gray-400">
                Every can see post,comments,Votes
              </p>
            </span>
            <span className=" flex items-center space-x-1">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="private"
                name="private"
                onChange={handleType}
                checked={type === "private"}
                sx={{
                  marginRight: "0px",
                  color: "black",
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
              <AiFillEyeInvisible size={22} className="text-gray-500" />
              <p className="text-gray-400 text-sm">
                Private, only you can allow pepole
              </p>
            </span>
            <span className=" flex items-center space-x-1">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Restricted"
                name="restricted"
                onChange={handleType}
                checked={type === "restricted"}
                sx={{ color: "black", marginRight: "0px" }}
              />
              <AiOutlineLock size={36} className="text-gray-500" />
              <p className="text-gray-400 text-sm">
                Restricted,Only thoes Comment,Votes whoes to allow you
              </p>
            </span>
            <div className="space-x-2 my-2">
              <Button variant="outlined" color="error" onClick={closeModel}>
                cencle
              </Button>
              <Button variant="outlined" sx={{width:'70%'}}  type="submit">
                Create
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CreateModel;
