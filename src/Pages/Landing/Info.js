import * as React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, Button } from "@material-ui/core";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useNavigate } from "react-router-dom";
import "./Button.css";
import LandingImage from "../../assets/pictures/x.png";
const useStyle = makeStyles({
  typography: {
    paddingTop: "25vh",
    paddingBottom: "1px",
    textAlign: "left",
  },
  typography2: {
    textAlign: "left",

    paddingTop: "-2px",
    paddingBottom: "1px",
  },
  btn: {
    backgroundColor: "#3522B3",
    borderRadius: "5rem",

    marginTop: "30vh",
    "&:hover": {
      background: "#9A5C11",
      transition: "background 0.3s",
    },
  },
  typographyBtn: {
    color: "#f5f5f5",
    "&:hover": {
      color: "gold",
      transition: "color 2s",
    },
  },
  icon: {
    "&:hover": {
      color: "white",
      transition: "color 2s",
    },
  },
  div: {
    backgroundImage: `url(${LandingImage})`,
    backgroundPosition: "cover",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  },
});

export default function Info() {
  let navigate = useNavigate();
  const Register = () => {
    navigate("/register");
  };
  const classes = useStyle();
  return (
    <div className={classes.div}>
      <Grid items xs={12}>
        <Box
          style={{ marginTop: "-7vh", marginLeft: "10px" }}
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          mt={{ xs: 3, sm: 10 }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: 30,
                md: 22,
                sm: 14,
                xs: 12,
              },
            }}
            px={{ xs: 4, sm: 10 }}
            mt={{ xs: 3, sm: 10 }}
            style={{
              fontFamily: "Iranian_Sans",
              fontWeight: "bold",
              color: "white",
            }}
            className={classes.typography}
          >
            {" "}
            خرید و فروش امن بیت‌کوین و ارزهای دیجیتال ایران
          </Typography>

          <Typography
            sx={{
              fontSize: {
                lg: 27,
                md: 20,
                sm: 12,
                xs: 10,
              },
            }}
            
            px={{ xs: 9, sm: 16, md: 19 }}
            mt={{ xs: 1, sm: 10 }}
            style={{ fontFamily: "Iranian_Sans", color: "white" }}
            className={classes.typography2}
            variant="h5"
            component="h6"
          >
            {" "}
            به بزرگترین بازار ارز دیجیتال ایران بپیوندید
          </Typography>

          <Box textAlign="center" style={{ marginButtom: "20px" }}>
            <Button
              id="btn"
              className={classes.btn}
              variant="contained"
              onClick={Register}
            >
              <ArrowLeftIcon
                className={classes.icon}
                sx={{ color: "#f5f5f5", fontSize: "3rem" }}
              />
              <Typography
                className={classes.typographyBtn}
                style={{ fontFamily: "Iranian_Sans", fontWeight: "bold" }}
              >
                {" "}
                همین الان شروع کن
              </Typography>
            </Button>
          </Box>
        </Box>
      </Grid>
    </div>
  );
}
