import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Button,
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
import WhatsappReportSearch from "./WhatsappReportSearch";

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
  const [currency, setCurrency] = useState("");
  const [defaultData, setDefault] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [textValue, setTextValue] = useState("");

  // useEffect(() => {
  //   fetch(
  //     "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php?format=format&amp;&amp;search_sms_reports_month=search_sms_reports_month"

   
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const toggleHandler = (click) => {
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
      if (filterData.length > 0) {
        setDefault(false);
      } else {
        setDefault(!defaultData);
      }
    }
  };

  useEffect(() => {
    console.log("main filter", filterData);
  }, [filterData]);

 

  return (
    <div className="mb-5 mt-5">
      <h3>length: {data?.length}</h3>
      {show && (
        <>
          <WhatsappReportSearch
          
          ></WhatsappReportSearch>
          {/* <FormControl className="mt-3" component="fieldset">
            <FormLabel component="legend">Group By</FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="top"
                control={<Checkbox />}
                label="Year"
                labelPlacement="top"
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
            
          </FormControl> */}
        </>
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
    </div>
  );
};

export default WhatsappReport;
