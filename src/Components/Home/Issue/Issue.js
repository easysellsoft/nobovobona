import React from 'react';
import AdminHome from '../AdminHome/AdminHome';
import IssueTable from './IssueTable';
import TableDefault from './../Home/Hook/TableDefault';
const Issue = () => {
    return (
        <div>
            <AdminHome />
            {/* <IssueTable/> */}
            <TableDefault/>
        </div>
    );
};

export default Issue;