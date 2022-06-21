import hi from "date-fns/esm/locale/hi/index.js";
import React, { useEffect, useState } from "react";
import Loading from './../../Shared/Loading';

// material start

// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { Pagination } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  // table: {
  //   minWidth: 650,
  // },
  // tableContainer: {
  //   borderRadius: 15,
  //   margin: "10px 10px",
  //   maxWidth: 950,
  // },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
 
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  // status: {
  //   fontWeight: "bold",
  //   fontSize: "0.75rem",
  //   color: "white",
  //   backgroundColor: "grey",
  //   borderRadius: 8,
  //   padding: "3px 10px",
  //   display: "inline-block",
  // },
}));

// let USERS = [],
//   STATUSES = ["Active", "Pending", "Blocked"];
// for (let i = 0; i < 14; i++) {
//   USERS[i] = {
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     phone: faker.phone.phoneNumber(),
//     jobTitle: faker.name.jobTitle(),
//     company: faker.company.companyName(),
//     joinDate: faker.date.past().toLocaleDateString("en-US"),
//     status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
//   };
// }
// material end

const WhatsappReportTable = (props) => {
  //pagination states
  const [pagination, setPagination] = useState(1);

  const handleChange = (event, value) => {
    setPagination(value);
  };
  // material start
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //material end
  const [checkData, setCheckData] = useState([]);
  console.log("props", props.updateTable);
  console.log("props", props.arrayTh);
  const { updateTable, arrayTh, isLoading } = props;
  console.log(isLoading);

  const thData = arrayTh;
  console.log("updateTable_th", updateTable);
  const dataKey =
    updateTable?.length > 0
      ? Object.keys(updateTable[0]).filter((d) => thData?.includes(d))
      : [];

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <div>
      <h1>{updateTable.length}</h1>
      {/* materaial ui start  */}
      <TableContainer
        sx={[
          {
            maxHeight: 440,
            "@media (max-width: 576px)": {
              width: "300px",
            },
          },
        ]}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {dataKey?.map((i) => (
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  {i}
                </TableCell>
              ))}
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Total Send
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Done
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Success
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Failed
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Queued
              </TableCell>

              <TableCell align="left">Asr(%)</TableCell>
              <TableCell
              // className={classes.tableHeaderCell}
              >
                Avg. CR
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Cost{" "}
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                GW.Cost
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Profit
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                R4 Cost
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                R3 Cost
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                R2 Cost
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                R1 Cost
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {updateTable
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                return (
                  <TableRow key={item.name}>
                    {dataKey?.map((dd) => (
                      <TableCell align="left">{item[dd]}</TableCell>
                    ))}
                    <TableCell align="left">{item.total_message}</TableCell>
                    <TableCell align="left">{item.deliver}</TableCell>
                    <TableCell align="left">{item.end_failed}</TableCell>
                    <TableCell align="left">{item.failed}</TableCell>
                    <TableCell align="left">{item.qued}</TableCell>
                    <TableCell align="left">{item.asr}</TableCell>
                    <TableCell align="left">{item.cr}</TableCell>
                    <TableCell align="left">{item.c1cost}</TableCell>
                    <TableCell align="left">{item.gatcost}</TableCell>
                    <TableCell align="left">{item.profit}</TableCell>
                    <TableCell align="left">{item.rs4cost}</TableCell>
                    <TableCell align="left">{item.rs3cost}</TableCell>
                    <TableCell align="left">{item.rs2cost}</TableCell>
                    <TableCell align="left">{item.rs1cost}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={10}
        color="primary"
        onChange={handleChange}
        pagination={pagination}
        sx={[
          {
            p: 2,
            mt: "10px",
            display: "flex",
            justifyContent: "flex-end",
          },
        ]}
      />
      <TableContainer
        component={Paper}
        // className={classes.tableContainer}
        sx={[
          {
            maxHeight: 440,
            "@media (max-width: 576px)": {
              width: "300px",
            },
          },
        ]}
      >
        <Table
          // className={classes.table}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {dataKey?.map((i) => (
                <TableCell
                  align="left"
                  // className={classes.tableHeaderCell}
                >
                  {i}
                </TableCell>
              ))}
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Total Send
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Done
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Success
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Failed
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Queued
              </TableCell>

              <TableCell align="left">Asr(%)</TableCell>
              <TableCell
              // className={classes.tableHeaderCell}
              >
                Avg. CR
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Cost{" "}
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                GW.Cost
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                Profit
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                R4 Cost
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                R3 Cost
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                R2 Cost
              </TableCell>
              <TableCell
                align="left"
                // className={classes.tableHeaderCell}
              >
                R1 Cost
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {updateTable
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => {
                return (
                  <TableRow key={item.name}>
                    {dataKey?.map((dd) => (
                      <TableCell align="left">{item[dd]}</TableCell>
                    ))}
                    <TableCell align="left">{item.total_message}</TableCell>
                    <TableCell align="left">{item.deliver}</TableCell>
                    <TableCell align="left">{item.end_failed}</TableCell>
                    <TableCell align="left">{item.failed}</TableCell>
                    <TableCell align="left">{item.qued}</TableCell>
                    <TableCell align="left">{item.asr}</TableCell>
                    <TableCell align="left">{item.cr}</TableCell>
                    <TableCell align="left">{item.c1cost}</TableCell>
                    <TableCell align="left">{item.gatcost}</TableCell>
                    <TableCell align="left">{item.profit}</TableCell>
                    <TableCell align="left">{item.rs4cost}</TableCell>
                    <TableCell align="left">{item.rs3cost}</TableCell>
                    <TableCell align="left">{item.rs2cost}</TableCell>
                    <TableCell align="left">{item.rs1cost}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={thData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter>
      </TableContainer>

      {/* materail ui end  */}
      {/* <div class="table-responsive">
        <table class="table caption-top">
          <caption>List of users</caption>
          <thead>
            <tr>
              {dataKey?.map((i) => (
                <th>{i}</th>
              ))}
              <th scope="col">Total Send</th>
              <th scope="col">Done</th>
              <th scope="col">Success</th>
              <th scope="col">Failed</th>
              <th scope="col">Queued</th>
              <th scope="col">Asr(%)</th>
              <th scope="col">Avg. CR</th>
              <th scope="col">Cost</th>
              <th scope="col">GW.Cost</th>
              <th scope="col">Profit</th>
              <th scope="col">R4 Cost</th>
              <th scope="col">R3 Cost</th>
              <th scope="col">R2 Cost</th>
              <th scope="col">R1 Cost</th>
            </tr>
          </thead>
          <tbody>
            {updateTable.map((item) => {
              return (
                <tr>
                  {dataKey?.map((dd) => (
                    <td>{item[dd]}</td>
                  ))}
                  <td>{item.total_message}</td>
                  <td>{item.deliver}</td>
                  <td>{item.end_failed}</td>
                  <td>{item.failed}</td>
                  <td>{item.qued}</td>
                  <td>{item.asr}</td>
                  <td>{item.cr}</td>
                  <td>{item.c1cost}</td>
                  <td>{item.gatcost}</td>
                  <td>{item.profit}</td>
                  <td>{item.rs4cost}</td>
                  <td>{item.rs3cost}</td>
                  <td>{item.rs2cost}</td>
                  <td>{item.rs1cost}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default WhatsappReportTable;


  
    