import hi from "date-fns/esm/locale/hi/index.js";
import React, { useEffect, useState } from "react";

const WhatsappReportTable = (props) => {
  console.log("props", props.updateTable);
  const { updateTable, arrayth } = props;
  console.log( arrayth);
  // const { year, month, day, total_message, deliver, end_failed, failed, qued, asr, cr, c1cost, gatcost, profit, rs4cost, rs3cost, rs2cost, rs1cost } = data;

  // const [table, setTable] = useState([]);
  // useEffect(() => {
  //     fetch(
  //       "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php"

  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setTable(data);
  //       });
  // },[])
  // const thData = ["day", "month", "service_type"];
  const thData = arrayth;
              
  const dataKey = updateTable.length > 0 ? Object.keys(updateTable[0]).filter(d => thData.includes(d)) : [];
  
  return (
    <div>
      <h1>{updateTable.length}</h1>

      <div class="table-responsive">
        <table class="table caption-top">
          <caption>List of users</caption>
          <thead>
            <tr>
              {dataKey?.map((i) => (
                <th>{i}</th>
              ))}
              <th scope="col">Done</th>

              {/* {updateTable.includes("year") && <th scope="col">Year</th>}
              {updateTable.includes("month") && <th scope="col">Month</th>}
              {updateTable.includes("day") && <th scope="col">Day</th>} */}
              {/* <th scope="col">Total Send</th>
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
              <th scope="col">R1 Cost</th> */}
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
                </tr>
              );

              //   (

              //   <tr>
              //     <td>{item.year}</td>
              //     {updateTable.includes("month") && <td>{item.month}</td>}
              //     {updateTable.includes("day") && <td>{item.day}</td>}
              //     <td>{item.total_message}</td>
              //     <td>{item.deliver}</td>
              //     <td>{item.end_failed}</td>
              //     <td>{item.failed}</td>
              //     <td>{item.qued}</td>
              //     <td>{item.asr}</td>
              //     <td>{item.cr}</td>
              //     <td>{item.c1cost}</td>
              //     <td>{item.gatcost}</td>
              //     <td>{item.profit}</td>
              //     <td>{item.rs4cost}</td>
              //     <td>{item.rs3cost}</td>
              //     <td>{item.rs2cost}</td>
              //     <td>{item.rs1cost}</td>
              //   </tr>
              // )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WhatsappReportTable;
