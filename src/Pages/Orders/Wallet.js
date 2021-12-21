import React, { useState, useEffect } from "react";
import { db, useAuth } from "../../Configs/firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Button, Typography, Grid } from "@mui/material";
import {
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Wallet.css";
import { makeStyles } from "@material-ui/styles";
const useStyle = makeStyles({
  paperStyle: {
    padding: 100,
    borderRadius: "6px",
  },
  typography: {
    fontFamily: "Iranian_Sans",
  },
  input: {
    width: "30vw",
    paddingBottom: "30px",
  },
});
const notifyPlz = () => toast("لطفا وارد شوید");
const notifyError = () => toast("خطایی رخ داده است");
const notify = () => toast("درخواست شما با موفقیت ثبت شد");
const Wallet = () => {
  const currentUser = useAuth();
  const classes = useStyle();
  const [coin, setCoin] = useState("");
  const [amounts, setAmounts] = useState(0);
  const [email, setEmail] = useState(currentUser);
  const [wallet, setWallet] = useState([]);

  const btnstyle = { margin: "8px 0", backgroundColor: "#3522B3" };
  useEffect((e) => {
    const userColletionRef = collection(db, "wallet");
    const getWallet = async () => {
      const data = await getDocs(userColletionRef);
      setWallet(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getWallet();
  }, []);

  const setAmount = async () => {
    try {
      const userColletionRef = collection(db, "wallet");
      setEmail(currentUser?.email);
      await addDoc(userColletionRef, {
        coin: coin,
        amount: amounts,
        email: email,
      });
      notify();
    } catch {
      if (currentUser == null) {
        notifyPlz();
      } else notifyError();
    }
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
      <Typography
        sx={{
          fontSize: {
            lg: 26,
            md: 23,
            sm: 17,
            xs: 15,
          },
        }}
        style={{
          paddingBottom: "20px",
          color: "#f5f5f5",
          fontFamily: "Iranian_Sans",
          textAlign: "center",
        }}
      >
        لطفا کوین و مقدار مورد نظرتان را وارد کنید
      </Typography>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.paperStyle}>
          <FormControl>
            <InputLabel className="select">کوین</InputLabel>
            <Select
              value={coin}
              inputlabel="کوین"
              onChange={(e) => {
                setCoin(e.target.value);
              }}
            >
              <MenuItem value={"Bitcoin"}>Bitcoin</MenuItem>
              <MenuItem value={"Ethereum"}>Ethereum</MenuItem>
              <MenuItem value={"Tether"}>Tether</MenuItem>
              <MenuItem value={"Salana"}>Salana</MenuItem>
              <MenuItem value={"Polygon"}>Polygon</MenuItem>
              <MenuItem value={"Stellar"}>Stellar</MenuItem>
            </Select>
            &nbsp;
            <TextField
              id="input"
              className={classes.input}
              fullWidth
              label="مقدار"
              required
              type="number"
              onChange={(e) => {
                setAmounts(e.target.value);
              }}
            />
            <Button
              type="ورود"
              variant="contained"
              style={btnstyle}
              fullWidth
              onClick={() => {
                setAmount();
              }}
            >
              <Typography
                style={{ color: "white", fontFamily: "Iranian_Sans" }}
              >
                ثبت
              </Typography>
            </Button>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={true}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Wallet;
