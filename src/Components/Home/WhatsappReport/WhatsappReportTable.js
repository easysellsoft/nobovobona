import React, { useEffect, useState } from "react";

const WhatsappReportTable = (props) => {
  console.log("props", props.data);
  const { filterData } = props;
  console.log(filterData);
  // const { year, month, day, total_message, deliver, end_failed, failed, qued, asr, cr, c1cost, gatcost, profit, rs4cost, rs3cost, rs2cost, rs1cost } = data;

  // const [table, setTable] = useState([]);
  // useEffect(() => {
  //     fetch(
  //       "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php?format=format&amp;&amp;search_sms_reports_month=search_sms_reports_month"

  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setTable(data);
  //       });
  // },[])
  return (
    <div>
      <h1>{props.data.length}</h1>

      <div class="table-responsive">
        <table class="table caption-top">
          <caption>List of users</caption>
          <thead>
            <tr>
              {filterData.includes("year") && <th scope="col">Year</th>}
              {filterData.includes("month") && <th scope="col">Month</th>}
              {filterData.includes("day") && <th scope="col">Day</th>}
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
            <th scope="col">R1 Cost</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => (
              <tr>
                {filterData.includes("year") && <th>{item.year}</th>}
              {  filterData.includes("month") &&<th>{item.month}</th>}
               { filterData.includes("day") &&<th>{item.day}</th>}
                <th>{item.total_message}</th>
                <th>{item.deliver}</th>
                <th>{item.end_failed}</th>
                <th>{item.failed}</th>
                <th>{item.qued}</th>
               <th>{item.asr}</th>
               <th>{item.cr}</th>
               <th>{item.c1cost}</th>
               <th>{item.gatcost}</th>
               <th>{item.profit}</th>
              <th>{item.rs4cost}</th>
              <th>{item.rs3cost}</th>
              <th>{item.rs2cost}</th>
              <th>{item.rs1cost}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WhatsappReportTable;
