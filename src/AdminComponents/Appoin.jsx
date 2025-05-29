import React from "react";
import AllAppointments from "./AllAppointments";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
function Appoin() {
  return (
    <div>
        <Sidebar/>
        <AdminNavbar />
        
      <AllAppointments />
    </div>
  );
}
export default Appoin;