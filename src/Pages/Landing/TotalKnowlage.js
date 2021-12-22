import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import "./Landing.css";
import Image from "../../assets/pictures/TotalKnowlage.jpg";
const useStyle = makeStyles({
  box: {
    textAlign: "center",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "cover",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  typography: {
    paddingBottom: "40px",

    textAlign: "center",
    fontSize: "2rem",
    color: "#f4f4f4",
    fontWeight: "bold",
  },
  typography2: {
    color: "#f4f4f4",
  },
  div: {
    paddingTop: "50px",
  },
});
const Landing = () => {
  const classes = useStyle();

  return (
    <div className={classes.div}>
      <Box className={classes.box} style={{ backgroundColor: "white", pl: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography
                  style={{ color: "#f4f4f4" }}
                  variant="h5"
                  component="h5"
                >
                  تعداد کاربران
                </Typography>
              </Box>
              <Box py={{ xs: 1, sm: 2, md: 3 }}>
                <Typography
                  variant="h3"
                  component="h5"
                  className={classes.typography2}
                >
                  +841K
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography
                  style={{ color: "#f4f4f4" }}
                  variant="h5"
                  component="h5"
                >
                  {" "}
                  معاملات انجام شده
                </Typography>
              </Box>
              <Box py={{ xs: 1, sm: 2, md: 3 }}>
                <Typography
                  variant="h3"
                  component="h5"
                  className={classes.typography2}
                >
                  +7M
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                {" "}
                <Typography
                  style={{ color: "#f4f4f4" }}
                  variant="h5"
                  component="h5"
                >
                  حجم معاملات
                </Typography>
              </Box>
              <Box py={{ xs: 1, sm: 2, md: 3 }}>
                <Typography
                  variant="h3"
                  component="h5"
                  className={classes.typography2}
                >
                  +12B
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Landing;
