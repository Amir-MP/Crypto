import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { login } from "../../Configs/firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { update } from "../../redux/userSlice";

const Login = () => {
  let navigate = useNavigate();
  const notifyError = () => toast("خطایی رخ داده است");
  const notify = () => toast("شما با موفقیت وارد شدید");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  async function handleSignIn() {
    try {
      await login(email, password);
      dispatch(update({email}))
      setTimeout(() => {
        navigate("/");
      }, 3000);
      notify();
    } catch {
      notifyError();
    }
  }

  const paperStyle = {
    padding: 60,
    height: "20vh auto",
    width: "100%",
    margin: "250px auto",
    borderRadius: 0,
  };

  const textfield = {
    direction: "rtl",
  };
  const avatarStyle = { backgroundColor: "green" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#3522B3" };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid xs={12} sm={6} md={4} dir="rtl">
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <Typography variant="h4">ورود</Typography>
          </Grid>
          <TextField
            className="label"
            style={textfield}
            placeholder="ایمیل را وارد کنید"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="label2"
            placeholder="پسورد را وارد کنید"
            type="password"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="ورود"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={() => {
              handleSignIn();
            }}
          >
            <Typography style={{ color: "white" }}>ورود</Typography>{" "}
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            draggable
          />

          <Typography>
            {" "}
            ثبت نام نکردید؟ &nbsp;<Link href="/register">ثبت نام</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
