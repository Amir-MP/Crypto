import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import ErrorIcon from "@mui/icons-material/Error";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const paperStyle = {
    padding: 60,
    height: "20vh auto",
    width: "100%",
    margin: "250px auto",
    borderRadius: 0,
  };
  const handleSignIn = () => {
    navigate("/login");
  };
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
            <ErrorIcon style={{ color: "red" }} sx={{ fontSize: 50 }} />

            <Typography variant="h4">لطفاوارد شوید</Typography>
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
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
