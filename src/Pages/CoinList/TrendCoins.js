import React from "react";
import Masonry from "react-masonry-css";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import "./TrendCoins.css";
import { useQuery } from "react-query";
const useStyle = makeStyles({
  cardStyle: {
    display: "inline-grid",
    transitionDuration: "0.3s",
  },
  gridContainer: {
    paddingLeft: "20px",
    paddingBottom: "10px",
    paddingTop: "50px",
    paddingRight: "20px",
    flexGrow: 1,
  },
  tableContainer: {
    display: "grid",
    textAlign: "center",
    width: "auto",
    borderCollapse: "separate",
    textJustify: "inherit",
    margin: "auto",
  },
  typography: {
    textAlign: "center",
    width: "auto",
    borderCollapse: "separate",
    textJustify: "auto",
    margin: "auto",
    alignItems: "center",
    paddingBottom: "10px",
    paddingTop: "30px",
    color: "#f5f5f5",
  },
});
const TrendCoins = () => {
  const classes = useStyle();

  async function fetchtrend() {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    return response.json();
  }
  const { data } = useQuery("trend", fetchtrend);
  console.log(data);

  return (
    <div>
      <Box py={{ xs: 1, sm: 2 }}>
        <Typography
          style={{ fontFamily: "Iranian_Sans" }}
          variant="h5"
          component="h5"
          className={classes.typography}
        >
          کوین های ترند شده
        </Typography>
      </Box>
      <Grid
        alignItems="center"
        justifyContent="center"
        dir="rtl"
        container
        spacing={0}
        className={classes.gridContainer}
      >
        {data?.coins.map((trend) => {
          return (
            <Masonry
              breakpointCols={1}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
              key={trend.item.coin_id}
            >
              <Card
                style={{ borderRadius: "20px" }}
                className={classes.cardStyle}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      minWidth: "100px",
                      height: {
                        lg: 140,
                        md: 120,
                        sm: 110,
                        xs: 200,
                      },
                    }}
                    image={trend.item.large}
                    alt="trend coin"
                  />
                  <CardContent
                    sx={{
                      width: "140px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Iranian_Sans",
                        fontSize: {
                          lg: 12,
                          md: 15,
                          sm: 18,
                          xs: 18,
                        },
                      }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {trend.item.name}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "Iranian_Sans" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {trend.item.symbol}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Masonry>
          );
        })}
      </Grid>
    </div>
  );
};
export default TrendCoins;
