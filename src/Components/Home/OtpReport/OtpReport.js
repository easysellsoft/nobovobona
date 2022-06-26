import React, { useEffect, useState } from 'react';

const OtpReport = () => {
     const [defaultTd, setDefaultTd] = useState([]);
       useEffect(() => {
         fetch(
           "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php?format=format&amp;&amp;search_sms_reports_month=search_sms_reports_month"
         )
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             setDefaultTd(data);
           });
       }, []);
    return (
        <div>
            
        </div>
    );
};

export default OtpReport;