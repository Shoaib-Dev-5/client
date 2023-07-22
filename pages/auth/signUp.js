import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/client";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useFetchPost from "@/hooks/useFetchPost";
import { useQuery } from "react-query";
import axios from "axios";

const signUp = ({ setModel }) => {
  const [err, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    conPassword: "",
  });
  const { data, isError, error, isLoading, refetch } = useQuery(
    "/auth/register",
    () => {
      return axios.post("http://127.0.0.1:8080/api/auth/register", form);
    },
    { enabled: false }
  );
  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    if (form.password !== form.conPassword) {
      return setError("Password Do not Match!");
    }
    if (!form.email.includes("@")) {
      return setError("Plz write valid Email");
    }
    refetch();
    console.log("query", data.data);
    setError("");
    if (!isError) {
      setModel(false);
    }
  };
  return (
    <form onSubmit={submit}>
      {isError && <Alert severity="error">{error}</Alert>}
      <div className="flex flex-col space-y-4 p-2">
        <h2 className="font-bold text-2xl text-center">SignUp</h2>
        <TextField
          variant="standard"
          type="text"
          label="name"
          placeholder="Name Here"
          name="name"
          value={form.name}
          onChange={HandleChange}
        />
        <TextField
          variant="standard"
          type="text"
          label="email"
          placeholder="Email Here"
          name="email"
          value={form.email}
          onChange={HandleChange}
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
        <TextField
          variant="standard"
          type="password"
          label="confirm password"
          placeholder="Confirm Password Here"
          name="conPassword"
          value={form.conPassword}
          onChange={HandleChange}
        />
        <Button type="submit" variant="text">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default signUp;
