import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/styles";
import millify from "millify";
import { Grid } from "@mui/material";
import "./Coins.css";
const Coin = ({ name, image, symbol, price, priceChange }) => {
  const useStyle = makeStyles({
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
  });
  const classes = useStyle();

  return (
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
          <TableBody>
            <TableRow sx={{ "&:last-child , &:last-child ": { border: 0 } }}>
              <TableCell
                align="left"
                style={{
                  width: 100,
                }}
                sx={{ minWidth: "10px" }}
              >
                <img alt="img" width="40" height="40" src={image} />
              </TableCell>
              <TableCell
                sx={{ minWidth: "10px" }}
                style={{ width: 100 }}
                align="left"
                component="th"
                scope="row"
              >
                {name}
              </TableCell>
              <TableCell
                align="left"
                sx={{ minWidth: "10px" }}
                style={{
                  width: 100,
                }}
              >$
                {millify(price, { precision: 5 })}
              </TableCell>
              <TableCell
                align="left"
                className="tableHidden"
                sx={{ minWidth: "10px" }}
                style={{ width: 100 }}
              >
                {symbol.toUpperCase()}
              </TableCell>
              {priceChange < 0 ? (
                <TableCell
                  sx={{ minWidth: "10px" }}
                  style={{ width: 100, color: "red" }}
                  align="left"
                >
                  {priceChange.toFixed(2)}%
                </TableCell>
              ) : (
                <TableCell
                  sx={{ minWidth: "10px" }}
                  style={{ width: 100, color: "green" }}
                  align="left"
                >
                  {priceChange.toFixed(2)}%
                </TableCell>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Coin;
