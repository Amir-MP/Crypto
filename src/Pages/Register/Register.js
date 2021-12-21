import { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { signup } from "../../Configs/firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
export default function Register() {
  let navigate = useNavigate();
  const notifyError = () => toast("خطایی رخ داده است");
  const notify = () => toast("ثبت نام انجام شد");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSignup() {
    try {
      await signup(email, password);
      setTimeout(() => {
      
        navigate("/");
      }, 3000);
      notify();
    } catch {
      notifyError();
      navigate("/");
    }
  }
  const paperStyle = {
    padding: 60,
    height: "20vh auto",
    width: "100%",
    margin: "250px auto",
    borderRadius: 0,
  };
  const avatarStyle = { backgroundColor: "red" };
  const btnstyle = {
    margin: "8px 0",
    backgroundColor: "#3522B3",
    Typography: "white",
  };
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
            <Typography variant="h4">ثبت نام</Typography>
          </Grid>

    {/*       <TextField
            className="label4"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ایمیل را وارد کنید"
            fullWidth
            required
          /> */}
          <TextField
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            className="label3"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="پسورد را وارد کنید"
            type="password"
            fullWidth
            required
          />
          <Button
            type="ثبت نام"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={() => {
              handleSignup();
              notify();
            }}
          >
            <Typography style={{ color: "white" }}>ثبت نام</Typography>{" "}
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            draggable
            pauseOnHover
          />
          <Typography>
            {" "}
            ثبت نام کردید؟ &nbsp;<Link href="/login">ورود</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
