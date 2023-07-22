import { auth } from "@/firebase/client";
import Alerts from "@/theme/Alerts";
import { Alert, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useQuery } from "react-query";
const Login = ({setModel}) => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const { data:user, isError, error, isLoading, refetch } = useQuery(
    "/auth/register",
    () => {
      return axios.post("http://127.0.0.1:8080/api/auth/login", form);
    },
    { enabled: false }
  );
    const {data}=user
  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submit = async(e) => {
    e.preventDefault();
    refetch();

    if(!isError){
      setModel(false)
    }
   
  };
  // if(isLoading){
  //   return <Alerts massage={error}  />
  // }
  
  return (
    <form onSubmit={submit}>
   {isError && <Alerts  massage={error.message} varient={error} />}
      <div className="flex flex-col space-y-4 p-2">
        <h2 className="font-bold text-2xl text-center">Login</h2>
        <TextField
          variant="standard"
          type="text"
          label="email"
          placeholder="Email Here"
          name="name"
          value={form.name}
          onChange={HandleChange}
          autoComplete="off"
        />
        <TextField
          variant="standard"
          type="password"
          label="password"
          placeholder="Password Here"
          name="password"
          value={form.password}
          onChange={HandleChange}
        />
        <Button type="submit" variant="text">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Login;
