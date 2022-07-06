import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

import PageHeader from "../components/PageHeader";
import { Grid, TextareaAutosize } from "@mui/material";
import { FormLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material/";
import { FormGroup } from "@mui/material/";
import { Button } from "@mui/material";
const useStyles = makeStyles({
  appMain: {
        paddingLeft: "10px",
      paddingRight: "20px",
        width: "100%",
    
  },
});
function AddIssue() {
  const [textValue, setTextValue] = useState("");
  const [title, setTitle] = useState("");
  const [title_eng, setTitle_eng] = useState("");
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("");
  const [sub_title, setSub_title] = useState("");
  const [publish_date, setPublish_date] = useState("");
  const [ar_file, setAr_file] = useState(null);
  const formData = new FormData();
  const classes = useStyles();
  const currencies = [
    {
      value: "0",
      label: "Unpublish",
    },
    {
      value: "1",
      label: "Publish",
    },
  ];
  const onTextChange = (e) => {
    e.preventDefault();
    //    let input = e.target.value;
    //    console.log(input);
    setStatus(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(ar_file);
    formData.append("title", title);
    formData.append("title_eng", title_eng);
    formData.append("puser", userId);
    formData.append("status", status);
    formData.append("sub_title", sub_title);
    formData.append("publish_date", publish_date);
    formData.append("ar_file", ar_file);
    //   formData.append(" ", );
    fetch(`http://nobovabna.com/webapi/mIssue_new.php`, {
      method: "POST",
      body: formData,
    })
      //  console.log(formData),
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setUpdateTable(data);
        // setFormDate("");
      });

    //   };
    console.log(e.target.serial.value);
    console.log(e.target.issue.value);
    console.log(e.target.background.value);
  };
  return (
    <>
          <PageHeader
              className="mt-5"
        title="New issue"
        subTitle="Form Adding design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <div className={classes.appMain}>
        <form onSubmit={handelSubmit}>
          <Grid
            container
            style={{
            //   width: "1000px",
            //     display: "flex",
            //   flexWrap: "wrap",
              //   textAlign: "center",
              //   marginTop: "14px",
              //   marginBottom: "25px",
              // marginRight: "100px",
             
            }}
            spacing={2}
          >
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Bangla Name</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                name="serial"
                type="text"
                fullWidth
                // value={formDate}
                onChange={(e) => setTitle?.(e.target.value)}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">English Name</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                //   variant="outlined"
                name="issue"
                type="text"
                fullWidth
                // value={toDate}
                onChange={(e) => setTitle_eng(e.target.value)}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">User Id</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
            
                name="background"
                type="Number"
                fullWidth
                // value={userName}
                onChange={(e) => setUserId(e.target.value)}
              />
            </Grid>
            {/* <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Publish Status</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
                variant="outlined"
                name="background"
                type="text"
                fullWidth
                // value={userName}
                onChange={(e) => setStatus(e.target.value)}
              />
            </Grid> */}
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Publish Status</FormLabel>
              <TextField
                style={{ margin: "7px" }}
        
                //   label="Service Type"
                label={<Box></Box>}
                // value={currency}
                // value={textValue}
                value={status}
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
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Text</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
             
                name="background"
                type="text"
                fullWidth
                // value={userName}
                onChange={(e) => setSub_title(e.target.value)}
              />
              {/* <TextareaAutosize
                style={{ margin: "7px", width: 200 }}
                label={<Box></Box>}
                aria-label="minimum height"
                minRows={3}
                // placeholder="Minimum 3 rows"
              /> */}
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">Date</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
          
                name="background"
                type="date"
                fullWidth
                // value={userName}
                onChange={(e) => setPublish_date(e.target.value)}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <FormLabel className="mt-2 ms-2">File</FormLabel>
              <TextField
                style={{ margin: "7px" }}
                label={<Box></Box>}
  
                name="background"
                type="file"
                fullWidth
                // value={userName}
                onChange={(e) => setAr_file(e.target?.files[0])}
              />
            </Grid>
          </Grid>

          <FormControl className="mt-3" component="fieldset">
            {/* <FormLabel component="legend">Group By</FormLabel> */}
            <FormGroup aria-label="position" row>
              <Box
                style={{
                  display: "flex",

                  textAlign: "center",
                  marginTop: "14px",
                  marginLeft: "10px",
                  marginBottom: "25px",
                  // marginRight: "100px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  width="25%"
                  sx={{ py: 1 }}
                  type="submit"
                >
                  Add
                </Button>
              </Box>
            </FormGroup>
          </FormControl>
        </form>
      </div>
    </>
  );
}

export default AddIssue;
