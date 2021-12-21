import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../CoinList/Coin";
import Landing from "../Landing/Landing";
import Info from "../Landing/Info";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TrendCoins from "../CoinList/TrendCoins";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Grid, TableHead } from "@mui/material";
import Paper from "@mui/material/Paper";
import ControlledOpenSpeedDial from "../../Components/SpeedDial";
import "./Coins.css";
import TotalKnowlage from "../../Pages/Landing/TotalKnowlage";

const useStyle = makeStyles({
  typography: {
    textAlign: "center",
    width: "auto",
    borderCollapse: "separate",
    textJustify: "inherit",
    margin: "auto",
    alignItems: "center",
    paddingBottom: "10px",
    paddingTop: "30px",
  },
  coindata: {
    display: "flex",
    textAlign: "center",
    width: "auto",
    borderCollapse: "separate",
    textJustify: "inherit",
    margin: "auto",
    alignItems: "center",
  },

  coinrow: {
    alignItems: "center",
  },
  tableContainer: {
    display: "flex",
    textAlign: "center",
    width: "auto",
    borderCollapse: "separate",
    textJustify: "inherit",
    margin: "auto",
  },
  volume: {
    display: "block",
    width: "200 px",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const classes = useStyle();
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Info />
      <TrendCoins />
      <Box py={{ xs: 1, sm: 2 }}>
        <Typography
          style={{ fontFamily: "Iranian_Sans", color: "#f5f5f5" }}
          variant="h5"
          component="h5"
          className={classes.typography}
        >
          قیمت لحظه ای ارز ها
        </Typography>
      </Box>
      <div className="coin-app">
        <div className="coin-search">
          <form>
            <input
              type="text"
              className="coin-input"
              placeholder="...جستجو"
              onChange={handleChange}
            />
          </form>
        </div>
        <Grid items xs={12} md={6}>
          <TableContainer
            style={{
              borderRadius: "0",
              boxShadow: "0px 0px 3px",
              marginBottom: "1px",
            }}
            component={Paper}
            className={classes.tableContainer}
          >
            <Table
              style={{ background: "#FFFFFF" }}
              sx={{ minWidth: "40vw" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow
                  sx={{ "&:last-child , &:last-child ": { border: 0 } }}
                >
                  <TableCell
                    align="left"
                    style={{
                      width: 100,
                    }}
                    sx={{ minWidth: "10px", fontFamily: "Iranian_Sans" }}
                  >
                    ایکون
                  </TableCell>
                  <TableCell
                    sx={{ minWidth: "10px", fontFamily: "Iranian_Sans" }}
                    style={{ width: 100 }}
                    align="left"
                    component="th"
                    scope="row"
                    className={classes.coinrow}
                  >
                    نام
                  </TableCell>

                  <TableCell
                    align="left"
                    sx={{ minWidth: "10px", fontFamily: "Iranian_Sans" }}
                    style={{
                      width: 100,
                    }}
                  >
                    قیمت
                  </TableCell>
                  <TableCell
                    className="tableHidden"
                    align="left"
                    sx={{ minWidth: "10px" }}
                    style={{ width: 100, fontFamily: "Iranian_Sans" }}
                  >
                    نام مختصر
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ minWidth: "10px" }}
                    style={{ width: 100, fontFamily: "Iranian_Sans" }}
                  >
                    تغییرات
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>

        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
      <div>
        <ControlledOpenSpeedDial />
        <TotalKnowlage />
        <Landing />
      </div>
    </>
  );
};

export default Coins;
