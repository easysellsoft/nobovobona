import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  ListItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import ButtonComp from "../../Shared/Button/Button";
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
const WhatsappReport = () => {
    // const [show, setShow] = useState(true);
    const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [currency, setCurrency] = React.useState("");
  const [defaultData, setDefault] = useState(true);
  const [filterData, setFilterData] = useState([]);




   const [textValue, setTextValue] = useState("");




  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  useEffect(() => {
    fetch(
      "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php?format=format&amp;&amp;search_sms_reports_month=search_sms_reports_month"

      // 'https://jsonplaceholder.typicode.com/posts'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const toggleHandler = (click) => {
    
   
    if (filterData.includes(click)) {
      // let deleting = filterData.filter((e) => e !== click);
      // setFilterData(deleting)
      let deleting = filterData.indexOf(click);
      console.log(deleting)
      if (deleting !== -1) {
        filterData.splice(deleting, 1)
      }
      setFilterData([...filterData]);
       console.log("after deleting  filter", filterData);

    }
  
    else {
      filterData.push(click);
         setFilterData([...filterData]);
        console.log("update filter", filterData);
        if (filterData.length > 0) {
          setDefault(false);
        } else {
          setDefault(!defaultData);
      }
      
    }
    
    
  }
  useEffect(() => {
     console.log("main filter", filterData);
  }, [filterData])



  
  const onTextChange = (e) => {
    e.preventDefault();
    let input = e.target.value;
    console.log(input)
    // setTextValue(e.target.value);
  }
  console.log(textValue)
 


  return (
    <div className="mb-5">
      <h3>length: {data?.length}</h3>
      {show && (
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "22ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <Grid container spacing={0}>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormLabel
                          className="mt-2 ms-2"
                          id="demo-row-radio-buttons-group-label"
                        >
                          Form Date
                        </FormLabel>
                      </RadioGroup>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      // label="Form Date"
                      onChange={onTextChange}
                      type="date"
                      autoComplete="current-date"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormLabel
                          className="mt-2 ms-2"
                          id="demo-row-radio-buttons-group-label"
                        >
                          To Date
                        </FormLabel>
                      </RadioGroup>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      // label="To Date"
                      type="date"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>

              <Grid item lg={2} xs={12} md={4} className="">
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormLabel
                          className="mt-2 ms-2"
                          id="demo-row-radio-buttons-group-label"
                        >
                          UserName
                        </FormLabel>
                      </RadioGroup>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="Username"
                      type="text"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <FormLabel
                        className="mt-2 ms-2"
                        // id="demo-row-radio-buttons-group-label"
                      >
                        Caller Id
                      </FormLabel>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="caller Id"
                      type="number"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <FormLabel
                        className="mt-2 me-2"
                        id="demo-row-radio-buttons-group-label"
                      >
                        Number
                      </FormLabel>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="Number"
                      type="number"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>

              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <FormLabel
                        className="mt-2 me-2"
                        id="demo-row-radio-buttons-group-label"
                      >
                        Message
                      </FormLabel>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="Message"
                      type="text"
                      autoComplete="current-text"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <FormLabel
                        className="mt-2 ms-2"
                        id="demo-row-radio-buttons-group-label"
                      >
                        Servie Type
                      </FormLabel>
                    </FormControl>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      label="Service Type"
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select your currency"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <FormLabel
                        className="mt-2 ms-2"
                        id="demo-row-radio-buttons-group-label"
                      >
                        Destination
                      </FormLabel>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="Destination"
                      type="text"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <FormLabel
                        className="mt-2 ms-2"
                        id="demo-row-radio-buttons-group-label"
                      >
                        GW.Cost
                      </FormLabel>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="GW.Cost"
                      type="text"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <FormLabel
                        className="mt-2 ms-2"
                        id="demo-row-radio-buttons-group-label"
                      >
                        Profit
                      </FormLabel>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="Profit"
                      type="text"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <FormLabel
                        className="mt-2 ms-2"
                        id="demo-row-radio-buttons-group-label"
                      >
                        Gateway
                      </FormLabel>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="Gateway"
                      type="text"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <FormLabel
                        className="mt-2 ms-2"
                        id="demo-row-radio-buttons-group-label"
                      >
                        End Reason
                      </FormLabel>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="End Reason"
                      type="text"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>

              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormLabel
                          className="mt-2 me-2"
                          id="demo-row-radio-buttons-group-label"
                        >
                          Gender
                        </FormLabel>
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label=">"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="<"
                        />
                      </RadioGroup>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="Cost "
                      type="text"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormLabel
                          className="mt-2 me-2"
                          id="demo-row-radio-buttons-group-label"
                        >
                          Gender
                        </FormLabel>
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label=">"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="<"
                        />
                      </RadioGroup>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="Cost "
                      type="text"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>
              <Grid item lg={2} xs={12} md={4}>
                <ListItem>
                  <div className="d-flex flex-column justify-center">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormLabel
                          className="mt-2 me-2"
                          id="demo-row-radio-buttons-group-label"
                        >
                          Gender
                        </FormLabel>
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label=">"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="<"
                        />
                      </RadioGroup>
                    </FormControl>
                    <TextField
                      id="outlined-password-input"
                      label="Cost "
                      type="text"
                      autoComplete="current-password"
                    />
                  </div>
                </ListItem>
              </Grid>
            </Grid>
          </div>

          <FormControl className="mt-3" component="fieldset">
            <FormLabel component="legend">Group By</FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Year"
                labelPlacement="top"
                // onChange={() => setDefault(!defaultData)}
                onChange={() => toggleHandler("year")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Month"
                labelPlacement="top"
                onChange={() => toggleHandler("month")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Day"
                labelPlacement="top"
                onChange={() => toggleHandler("day")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Hour"
                labelPlacement="top"
                onChange={() => toggleHandler("hour")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="CC"
                labelPlacement="top"
                onChange={() => toggleHandler("cc")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Destination"
                labelPlacement="top"
                onChange={() => toggleHandler("destination")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Service"
                labelPlacement="top"
                onChange={() => toggleHandler("service")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Service Type"
                labelPlacement="top"
                onChange={() => toggleHandler("service_type")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Client"
                labelPlacement="top"
                onChange={() => toggleHandler("client")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="End"
                labelPlacement="top"
                onChange={() => toggleHandler("end")}
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Gateway"
                labelPlacement="top"
                onChange={() => toggleHandler("gateway")}
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
        </Box>
      )}
      <Box
        sx={{
          mt: 5,
        }}
      >
        <Box
          sx={[
            {
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "start",
              mt: 2,
              flexWrap: "wrap",
            },
          ]}
        >
          <ButtonComp title="Refresh" color="warning" refreshIco />
          <ButtonComp
            title="Add"
            color="success"
            add
            onClick={() => {
              // navigate("/projectRateAdd");
            }}
          />
          <div className="btn_prb" onClick={() => setShow(!show)}>
            <ButtonComp
              title="Search"
              color="info"
              search
              show
              // onClick= {eventHandler}
              // onClick={() => setShow(!show) }
              // setShow={setShow}
            >
              {/* toggle: {show ? "show" : "hide"} */}
            </ButtonComp>
          </div>

          {/* {show && <div>Hi there</div>} */}

          <ButtonComp title="Delete" color="error" deleteIco />
          <ButtonComp title="Export" color="primary" exportIco />
        </Box>
      </Box>

      {defaultData ? (
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
      )}
    </div>
  );
};

export default WhatsappReport;
