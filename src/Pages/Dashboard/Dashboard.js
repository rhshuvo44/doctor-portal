import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-saidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-center mt-10">
          <h2 className="text-3xl text-purple-500">Welcome to your Dashboard</h2>
        <Outlet />
        
      </div>
      <div className="drawer-side">
        <label for="dashboard-saidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>Sidebar Item 1</Link>
          </li>
          <li>
            <Link to='/dashboard/review'>Sidebar Item 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
