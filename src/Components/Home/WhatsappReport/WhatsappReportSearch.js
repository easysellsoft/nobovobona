import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import WhatsappReportTable from "./WhatsappReportTable";
const currencies = [
  {
    value: "0",
    label: "All",
  },
  {
    value: "1",
    label: "SMS",
  },
  {
    value: "2",
    label: "CAMPAIGN",
  },
];

const WhatsappReportSearch = () => {
  const [currency, setCurrency] = useState("");
  const [textValue, setTextValue] = useState("");
  const [data, setData] = useState([]);

  const [defaultData, setDefault] = useState(true);
  const [filterData, setFilterData] = useState([]);

  const [formDate, setFormDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [userName, setUserName] = useState("");
  const [callerId, setCallerId] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [destination, setDestination] = useState("");
  const [gwCost, setGwCost] = useState("");
  const [profit, setProfit] = useState("");
  const [gateway, setGateway] = useState("");
  const [endReason, setEndReason] = useState("");
  const [cost, setCost] = useState("");

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [cc, setCc] = useState("");
  const [destination1, setDestination1] = useState("");
  const [service1, setService1] = useState("");
  const [serviceType1, setServiceType1] = useState("");
  const [client, setClient] = useState("");
  const [end, setEnd] = useState("");
  const [gateway1, setGateway1] = useState("");

  //   const [rememberMe, setRememberMe] = useState(false);
  const [updateTable, setUpdateTable] = useState([]);
  const [arrayTh, setArrayTh] = useState([]);
  const [ip, setIp] = useState("");
  //  const location = useLocation();

  //  const navigate = useNavigate();
  //  const redirectUi = location.state ? location.state.from : "/";
  const formData = new FormData();
  let temp = "";

  const onTextChange = (e) => {
    e.preventDefault();
    //    let input = e.target.value;
    //    console.log(input);
    setTextValue(e.target.value);
  };

  useEffect(() => {
    fetch(
      "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php?format=format&amp;&amp;search_sms_reports_month=search_sms_reports_month"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const toggleHandler = (click) => {
    console.log(click);
    if (click === "year") {
      setYear("year");
    }
    if (click === "month") {
      setMonth("month");
    }
    if (click === "day") {
      setDay("day");
    }
    if (click === "hour") {
      setHour("hour");
    }
    if (click === "cc") {
      setCc("cc");
    }
    if (click === "operator") {
      setDestination1("operator");
    }
    if (click === "service_type") {
      setServiceType1("sms_type");
    }
    if (click === "client_id") {
      setClient("client_id");
    }
    if (click === "end_reason") {
      setEnd("report");
    }
    if (click === "gateway") {
      setGateway1("gateway_group");
    }
    // console.log('year',year)

    if (filterData.includes(click)) {
      let deleting = filterData.indexOf(click);
      console.log(deleting);
      if (deleting !== -1) {
        filterData.splice(deleting, 1);
      }
      setFilterData([...filterData]);
      console.log("after deleting  filter", filterData);
    } else {
      filterData.push(click);
      setFilterData([...filterData]);
      console.log("update filter", filterData);
      // if (filterData.length > 0) {
      //   setDefault(false);
      // } else {
      //   setDefault(!defaultData);
      // }
    }
  };

  const handelSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    // arrayTh.push((year || month))
    //   setArrayTh([...arrayTh]);
    //   console.log("update filter", arrayTh);

    setArrayTh([...filterData]);

    // setArrayTh([
    //   year,
    //   month,
    //   day,
    //   hour,
    //   cc,
    //   destination1,
    //   service1,
    //   serviceType1,
    //   client,
    //   end,
    //   gateway1,
    // ]);

    console.log(
      formDate,
      toDate,
      userName,
      callerId,
      number,
      message,
      serviceType,

      destination,
      gwCost,
      profit,
      gateway,
      endReason,
      cost,
      filterData,

      year,
      month,
      day,
      hour,
      cc,
      destination1,
      service1,
      serviceType1,
      client,
      end,
      gateway1
    );

    formData.append("search_flexi_reports_from_date", formDate);
    formData.append("search_flexi_reports_to_date", toDate);
    formData.append("search_flexi_reports_username", userName);
    // formData.append("pass", callerId);
    formData.append("search_flexi_reports_number", number);
    // formData.append("pass", message);
    // formData.append("pass", serviceType);
    // formData.append("pass", destination);
    formData.append("search_flexi_reports_gw_cost1", gwCost);
    formData.append("search_flexi_reports_profit1", profit);
    formData.append("search_flexi_reports_gateway", gateway);
    formData.append("search_flexi_reports_end_reason", endReason);
    formData.append("search_flexi_reports_cost1", cost);
    formData.append("format", "format");
    formData.append("search_sms_reports_month", month);
    formData.append("search_sms_reports_day", day);
    formData.append("search_sms_reports_hour", hour);
    formData.append("search_sms_reports_year", year);
    formData.append("search_sms_reports_cc", cc);
    formData.append("search_sms_reports_operator", destination1);
    formData.append("search_sms_reports_service_type1", serviceType1);
    formData.append("search_sms_reports_end_gateway", gateway1);
    formData.append("search_sms_reports_end_reason1", end);
    formData.append("search_sms_reports_client", client);

    fetch(
      `http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php`,
      {
        method: "POST",
        body: formData,
      }
    )
      //  console.log(formData),
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateTable(data);
      });

    // .then((res) => {
    //   console.log(res);
    //   res.json();
    // })
    // .then((data) => {
    //   console.log(data);
    //   e.target.reset();
    // })
    //  .catch((err) => console.log(err));

    //   .catch((error) => {
    //       console.log(error)
    //   })
  };
  //  useEffect(() => {
  //    fetch(
  //      "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php"
  //    )
  //      .then((res) => res.json())
  //      .then((data) => {
  //        console.log(data);
  //        setUpdateTable(data);
  //      });
  //  }, []);

  // let th = [
  //   year,

  // ];

  // useEffect(() => {
  //   setArrayth(th);
  // }, [th]);

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <Grid container spacing={3}>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Form Date</FormLabel>
            <TextField
              label={<Box></Box>}
              //   variant="outlined"
              name="formDate"
              type="date"
              fullWidth
              value={formDate}
              onChange={(e) => setFormDate?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">To Date</FormLabel>
            <TextField
              label={<Box></Box>}
              //   variant="outlined"
              name="formDate"
              type="date"
              fullWidth
              value={toDate}
              onChange={(e) => setToDate?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">UserName</FormLabel>
            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="number"
              type="text"
              fullWidth
              value={userName}
              onChange={(e) => setUserName?.(e.target.value)}
            />
          </Grid>

          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Caller Id</FormLabel>
            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="caller-id"
              type="text"
              fullWidth
              value={callerId}
              onChange={(e) => setCallerId?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Number</FormLabel>
            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="number"
              type="text"
              fullWidth
              value={number}
              onChange={(e) => setNumber?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Message</FormLabel>
            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="message"
              type="text"
              fullWidth
              value={message}
              onChange={(e) => setMessage?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2 w-100">Service Type</FormLabel>
            <TextField
              id="outlined"
              //   label="Service Type"
              label={<Box></Box>}
              // value={currency}
              value={textValue}
              fullWidth
              onChange={onTextChange}
              // onChange={(handleChange, onTextChange)}
              select
              SelectProps={{
                native: true,
              }}
              //   helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Destination</FormLabel>
            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="destination"
              type="text"
              fullWidth
              value={destination}
              onChange={(e) => setDestination?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel
                className="mt-2 me-2"
                id="demo-row-radio-buttons-group-label"
              >
                GW.Cost
              </FormLabel>
              <FormControlLabel value="1" control={<Radio />} label=">" />
              <FormControlLabel value="2" control={<Radio />} label="<" />
            </RadioGroup>
            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="gw-cost"
              type="number"
              fullWidth
              value={gwCost}
              onChange={(e) => setGwCost?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel
                className="mt-2 me-2"
                id="demo-row-radio-buttons-group-label"
              >
                Profit
              </FormLabel>
              <FormControlLabel value="1" control={<Radio />} label=">" />
              <FormControlLabel value="2" control={<Radio />} label="<" />
            </RadioGroup>
            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="profit"
              type="number"
              fullWidth
              value={profit}
              onChange={(e) => setProfit?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">Gateway</FormLabel>
            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="user-name"
              type="text"
              fullWidth
              value={gateway}
              onChange={(e) => setGateway?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            <FormLabel className="mt-2 ms-2">End Reason</FormLabel>
            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="end-reason"
              type="text"
              fullWidth
              value={endReason}
              onChange={(e) => setEndReason?.(e.target.value)}
            />
          </Grid>
          <Grid item lg={3} xs={6} md={4}>
            {/* <FormLabel className="mt-2 ms-2">End Reason</FormLabel> */}

            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormLabel
                className="mt-2 me-2"
                id="demo-row-radio-buttons-group-label"
              >
                Cost
              </FormLabel>
              <FormControlLabel value="1" control={<Radio />} label=">" />
              <FormControlLabel value="2" control={<Radio />} label="<" />
            </RadioGroup>

            <TextField
              label={<Box></Box>}
              variant="outlined"
              name="cost"
              type="number"
              fullWidth
              value={cost}
              onChange={(e) => setCost?.(e.target.value)}
            />
          </Grid>
        </Grid>

        <FormControl className="mt-3" component="fieldset">
          <FormLabel component="legend">Group By</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="year"
              control={<Checkbox />}
              label="Year"
              labelPlacement="top"
              // onChange={() => setDefault(!defaultData)}
              onChange={(e) => toggleHandler("year")}
              // onChange={(e) => setYear?.("year")}
            />
            <FormControlLabel
              value="month"
              control={<Checkbox />}
              label="Month"
              labelPlacement="top"
              onChange={() => toggleHandler("month")}
              // onChange={(e) => setMonth?.("month")}
            />
            <FormControlLabel
              value="day"
              control={<Checkbox />}
              label="Day"
              labelPlacement="top"
              onChange={() => toggleHandler("day")}
              // onChange={(e) => setDay?.("day")}
            />
            <FormControlLabel
              value="hour"
              control={<Checkbox />}
              label="Hour"
              labelPlacement="top"
              onChange={() => toggleHandler("hour")}
              // onChange={(e) => setHour?.("hour")}
            />
            <FormControlLabel
              value="cc"
              control={<Checkbox />}
              label="CC"
              labelPlacement="top"
              onChange={() => toggleHandler("cc")}
              // onChange={(e) => setCc?.("cc")}
            />
            <FormControlLabel
              value="operator"
              control={<Checkbox />}
              label="Destination"
              labelPlacement="top"
              onChange={() => toggleHandler("operator")}
              // onChange={(e) => setDestination1?.("operator")}
            />

            <FormControlLabel
              value="service_type"
              control={<Checkbox />}
              label="Service"
              labelPlacement="top"
              onChange={() => toggleHandler("service_type")}
              // onChange={() => setServiceType("sms_type")}
              // onChange={(e) => setServiceType1?.("sms_type")}
            />
            <FormControlLabel
              value="client_id"
              control={<Checkbox />}
              label="Client"
              labelPlacement="top"
              onChange={() => toggleHandler("client_id")}
              // onChange={(e) => setClient?.("client_id")}
            />
            <FormControlLabel
              value="end_reason"
              control={<Checkbox />}
              label="End Reason"
              labelPlacement="top"
              onChange={() => toggleHandler("end_reason")}
              // onChange={(e) => setEnd?.("report")}
            />
            <FormControlLabel
              value="gateway"
              control={<Checkbox />}
              label="End Gateway"
              labelPlacement="top"
              onChange={() => toggleHandler("gateway")}
              // onChange={(e) => setGateway1?.("gateway_group")}
            />
          </FormGroup>
          {/* <button
              style={{
                maxWidth: "100px",
                maxHeight: "56px",
                borderRadius: "15px",
                fontWeight: "bold",
                letterSpacing: "1px",
                marginTop: "12px",
              }}
              className="bg-secondary font-bold text-light p-3 me-4 w-22"
            >
              Search
            </button> */}
        </FormControl>

        <Box
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            width="25%"
            sx={{ py: 2 }}
            type="submit"
          >
            Search
          </Button>
        </Box>
      </form>
      {/* {defaultData ? (
        <table class="table caption-top">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">No. Of SMS</th>
              <th scope="col">Done</th>
              <th scope="col">Success</th>
              <th scope="col">Failed</th>
              <th scope="col">Queued</th>
              <th scope="col">ASR(%)</th>
              <th scope="col">Avg.CR</th>
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
            <tr>
              <td>198</td>
              <td>97</td>
              <td>95</td>
              <td>2</td>
              <td>0</td>
              <td>47.5663636737</td>
              <td>0</td>
              <td>112</td>
              <td>52.185</td>
              <td>44</td>
              <td>18</td>
              <td>84</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      ) : (
       
        <WhatsappReportTable data={data} filterData={filterData} />
      )} */}
      {updateTable.length === 0 ? (
        <table class="table caption-top">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">No. Of SMS</th>
              <th scope="col">Done</th>
              <th scope="col">Success</th>
              <th scope="col">Failed</th>
              <th scope="col">Queued</th>
              <th scope="col">ASR(%)</th>
              <th scope="col">Avg.CR</th>
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
            <tr>
              <td>198</td>
              <td>97</td>
              <td>95</td>
              <td>2</td>
              <td>0</td>
              <td>47.5663636737</td>
              <td>0</td>
              <td>112</td>
              <td>52.185</td>
              <td>44</td>
              <td>18</td>
              <td>84</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <WhatsappReportTable updateTable={updateTable} arrayTh={arrayTh} />
      )}
    </div>
  );
};

export default WhatsappReportSearch;
