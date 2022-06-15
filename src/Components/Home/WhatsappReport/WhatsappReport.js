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

  // const eventHandler = () => {
  //   console.log("clicked")
  //   setShow(!show);
  //   console.log(show)
  // }
  console.log(show)
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
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Month"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Day"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Hour"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="CC"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Destination"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Service"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Service Type"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Client"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="End"
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Gateway"
                labelPlacement="top"
              />
            </FormGroup>
            <button
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
            </button>
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
          <div
            className="btn_prb"
            onClick={() => setShow(!show) }
          >
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

      <WhatsappReportTable/>
    </div>
  );
};

export default WhatsappReport;
