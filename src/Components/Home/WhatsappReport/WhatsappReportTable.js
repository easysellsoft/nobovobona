import hi from "date-fns/esm/locale/hi/index.js";
import React, { useEffect, useState } from "react";
import Loading from './../../Shared/Loading';

const WhatsappReportTable = (props) => {
  const [checkData, setCheckData] = useState([]);
  console.log("props", props.updateTable);
  console.log("props", props.arrayTh);
  const { updateTable, arrayTh, isLoading } = props;
  console.log(isLoading)
  // console.log( arrayth);

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

  // if (arrayth.includes("year" || "month")) {
  //   let deleting = arrayth.indexOf("year" || "month");
  //   console.log(deleting);
  //   if (deleting !== -1) {
  //     arrayth.splice(deleting, 1);
  //   }
  //    setCheckData([...arrayth]);

  // }
  // console.log("after deleting  filter", checkData);
  // useEffect(() => {
  //     if (thData.includes("year" || "month")) {
  //       console.log("data  ddfdfdf");
  //       setCheckData(null);
  //     } else {
  //       const dataKey =
  //         updateTable.length > 0
  //           ? Object.keys(updateTable[0]).filter((d) => thData.includes(d))
  //           : [];
  //       setCheckData(dataKey);
  //     }
  // }, [thData])

  // console.log("checkData", checkData)
  // const thData = ["day", "month", "service_type"];
  const thData = arrayTh;
  console.log('theader_', thData);
  console.log("updateTable_th",updateTable)
  const dataKey =
    updateTable?.length > 0
      ? Object.keys(updateTable[0]).filter((d) => thData?.includes(d))
      : [];

  return isLoading ? <Loading></Loading> :  (
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
