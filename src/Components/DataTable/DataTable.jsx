import React from "react";
import "./DataTable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { userColums, userData } from "../../DataTableSource";
import { Link } from "react-router-dom";

const DataTable = () => {
  // Actions

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/user/abc" style={{ textDecoration: "none" }}>
              <button className="viewButton">View</button>
            </Link>
            <button className="deleteButton">Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="main">

    
    <div className="dataTable" style={{ height: "640px", width: "100%" }}>

      <div className="addNewButton">
      <p>Add New User </p>
      <Link to='/user/new' style={{textDecoration:'none'}} className="btn">
     <button>Add New</button>
      </Link>
      </div>
    
      <DataGrid 
        className="dataGrid"
        rows={userData}
        columns={userColums.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15]}
        checkboxSelection
      />
    </div>
    </div>
  );
};

export default DataTable;
