import React, { useEffect, useState } from 'react';

const WhatsappReportTable = () => {
    const [table, setTable] = useState([]);
    useEffect(() => {
        fetch(
          "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php?format=format&amp;&amp;search_sms_reports_month=search_sms_reports_month"

          // 'https://jsonplaceholder.typicode.com/posts'
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setTable(data);
          });
    },[])
    return (
        <div>
            <h1>{table.length}</h1>
        </div>
    );
};

export default WhatsappReportTable;