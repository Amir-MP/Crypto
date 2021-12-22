import React from "react";
import { Container, Grid, Box, Link } from "@material-ui/core";
import "./Footer.css";
import Logo from "../assets/pictures/logo.png";

const Footer = () => {
  const JDate = require("jalali-date");
  const jdate = new JDate();

  return (
    <footer className="footer">
      <Box
        dir="rtl"
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        mt={{ xs: 3, sm: 10 }}
        style={{
          backgroundColor: "#3522B3",
          boxShadow: "10px 10px 10px 8px ",
          textAlign: "left",
        }}
      >
        <img alt="logo" src={Logo} className="logo" />

        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} style={{ paddingTop: "50px" }}>
              <Box style={{ color: "lightgray", fontSize: "1.2rem" }}>
                لینک ها
              </Box>
              <Box py={{ xs: 1, sm: 2 }}>
                <Link style={{ color: "white" }} href="/" >
                  درباره ما
                </Link>
              </Box>
              <Link style={{ color: "white" }} href="/">
                تماس با ما
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              style={{ color: "white", paddingTop: "50px" }}
            >
              <Box style={{ color: "lightgray", fontSize: "1.2rem" }}>
                بخش کاربری
              </Box>
              <Box py={{ xs: 1, sm: 2 }} style={{ color: "white" }}>
                <Link href="/register" color="inherit">
                  ثبت نام
                </Link>
              </Box>
              <Link href="/login" color="inherit">
                ورود
              </Link>
            </Grid>
            <Grid style={{ color: "white" }} item xs={12} sm={4}>
              <Box
                style={{
                  color: "lightgray",
                  paddingTop: "32px",
                  fontSize: "1.2rem",
                }}
              >
                صرافی
              </Box>
              <Box style={{ color: "white" }} py={{ xs: 1, sm: 2 }}>
                <Link href="/" color="inherit">
                  سوالات متداول
                </Link>
              </Box>
              <Link href="/" color="inherit">
                قوانین و مقررات
              </Link>
            </Grid>
          </Grid>
          <Box
            style={{ color: "white" }}
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
          >
            دست سوم &reg; {jdate.getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
