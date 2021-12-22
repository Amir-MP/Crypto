import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import './Landing.css'
import Image from '../../assets/pictures/Blured.png'
const useStyle = makeStyles({
  box: {
    textAlign: "center",
    backgroundImage:`url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
   
  
  },
  typography: {
    paddingBottom: "40px",
    
    textAlign: "center",
    fontSize: "2rem",
    color: "#f4f4f4",
    fontWeight: 'bold',
    
  },
  typography2: {
    color: "#f4f4f4",
    paddingBottom:'20px',
  },
div:{
  
}
});
const Landing = () => {
  const classes = useStyle();

  return (
    <div className={classes.div}>
     
      <Box  className={classes.box} 
       sx={{ pl: 10 }}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        style={{ backgroundColor: "white",  pl: 10}}
      >
        <Typography id="typography" className={classes.typography}>
          {" "}
          چرا ما را باید انتخاب کنید؟
        </Typography>
        <Container maxWidth="false">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
              {" "}
              <img id="land"
                alt="img"
                src={"https://nobitex.ir/_nuxt/img/why3.e58afe1.webp"}
              />
              <Box>
                <Typography style={{color: "#f4f4f4",}} variant="h5" component="h5">
                  پیشرو و سریع
                </Typography>
              </Box>
              <Box py={{ xs: 1, sm: 2 ,md:3 }} >
                <Typography
                  variant="h6"
                  component="h5"
                  className={classes.typography2}
                >
                  پیشرو و سریع تنوع رمزارزها و سرعت معاملات، ما را جزو
                  بهترین بازارهای آنلاین قرار داده است
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} >
              <img id="land"
                alt="img"
                src={"https://nobitex.ir/_nuxt/img/why2.c43f234.webp"}
              />
              <Box>
                <Typography style={{color: "#f4f4f4",}} variant="h5" component="h5">
                  {" "}
                  خرید و فروش امن
                </Typography>
              </Box>
              <Box py={{ xs: 1, sm: 2,md:3 }}>
                <Typography
                  variant="h6"
                  component="h5"
                  className={classes.typography2}
                >
                  اولویت امنیت است. با خیالی آسوده و بدون نگرانی خرید و
                  فروش کنید
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img id="land"
                alt="img"
                src={"https://nobitex.ir/_nuxt/img/why1.1503e60.webp"}
              />
              <Box>
                {" "}
                <Typography style={{color: "#f4f4f4",}} variant="h5" component="h5">
                  ساده و کاربردی
                </Typography>
              </Box>
              <Box py={{ xs: 1, sm: 2,md:3 }}>
                <Typography 
                  variant="h6"
                  component="h5"
                  className={classes.typography2}
                >
                  محیط ساده و کاربردی، معامله ارزدیجیتال را برای شما لذت
                  بخش خواهد کرد
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
