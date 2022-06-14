import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

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
  return (
    <div>
      <h3>length: {data?.length}</h3>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-password-input"
            // label="Form Date"
            type="date"
            autoComplete="current-date"
          />
          <TextField
            id="outlined-password-input"
            // label="To Date"
            type="date"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="Username"
            type="text"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="caller Id"
            type="number"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="Number"
            type="number"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="Message"
            type="text"
            autoComplete="current-text"
          />
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
          <TextField
            id="outlined-password-input"
            label="Destination"
            type="text"
            autoComplete="current-password"
          />
          
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <TextField
            id="outlined-password-input"
            label="Cost "
            // <Checkbox {...label} />
            type="text"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="GW.Cost"
            type="text"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="Profit"
            type="text"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="Gateway"
            type="text"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-password-input"
            label="End Reason"
            type="text"
            autoComplete="current-password"
          />
        </div>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Group By
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {/* <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />
          
        </div>
      </Box> */}
    </div>
  );
};

export default WhatsappReport;
