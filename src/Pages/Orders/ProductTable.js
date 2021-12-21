import React from "react";
import { useExpanded, useGroupBy, useSortBy, useTable } from "react-table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

const useStyle = makeStyles({
  tableContainer: {
    
    paddingBottom: "50px",

    display: "flex",
    textAlign: "center",
    width: "700px",
    borderCollapse: "separate",
    textJustify: "inherit",
    margin: "auto",
  },
  typography: {
    fontFamily: "Iranian_Sans",
    textAlign: "center",
    width: "auto",
    borderCollapse: "separate",
    textJustify: "inherit",
    margin: "auto",
    alignItems: "center",
    paddingBottom: "10px",
    paddingTop: "30px",
    
  },
});

export default function ProductTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useGroupBy, useSortBy, useExpanded);

  const classes = useStyle();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid items xs={12} sm={4} md={8}>
          <Typography
            sx={{ 
              minWidth: "10px",
              fontSize: {
                lg: 25,
                md: 18,
                sm: 17,
                xs: 14,
              },
              fontFamily: "Iranian_Sans",
              color: "#f5f5f5",
            }}
            className={classes.typography}
          >
            {" "}
            ترید های انجام شده
          </Typography>
          <TableContainer className={classes.tableContainer}>
            <Table
              style={{ background: "#FFFFFF", boxShadow: "0px 0px 10px 0px" }}
              aria-label="simple table"
              {...getTableProps()}
            >
              <TableHead>
                {headerGroups.map((headerGroup) => (
                  <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <TableCell
                        class
                        align="left"
                        style={{ fontFamily: "Iranian_Sans" }}
                        sx={{ 
                          minWidth: "10px",
                          fontSize: {
                            lg: 20,
                            md: 18,
                            sm: 15,
                            xs: 12,
                          },
                        }}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.canGroupBy && column.id === "id" ? (
                          <Box
                            component="div"
                            sx={{ display: "inline" }}
                            {...column.getGroupByToggleProps()}
                          >
                            {" "}
                            {column.isGrouped ? "+ " : "- "}
                          </Box>
                        ) : null}

                        {column.render("Header")}
                        <Box component="div" sx={{ display: "inline" }}>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " ▼"
                              : " ▲"
                            : ""}
                        </Box>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <TableRow {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <TableCell
                            sx={{
                              textAlign: "center",
                              minWidth: "10px",
                              fontSize: {
                                lg: 18,
                                md: 18,
                                sm: 15,
                                xs: 13,
                              },
                            }}
                            style={{ width: 120, fontFamily: "Iranian_Sans" }}
                            {...cell.getCellProps()}
                          >
                            <span {...row.getToggleRowExpandedProps()}></span>

                            {cell.render("Cell")}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
