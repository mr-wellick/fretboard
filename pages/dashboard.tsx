import React, { FC } from "react";
import { DashboardIcon } from "../src/icons";

const Sidebar: FC = () => {
  return (
    <div className="w-sidebar bg-dark-blue absolute h-full">
      <header tabIndex={0} className="pl-6 pr-3 py-2 text-white">
        <p className="leading-none uppercase">fret</p>
        <p className="leading-none uppercase">board</p>
      </header>
      <nav tabIndex={0}>
        <ul className="px-6 py-1">
          <li className="flex items-center">
            <div className="mr-3">
              <DashboardIcon />
            </div>
            <a tabIndex={0} className="text-white" href="#">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Dashboard: FC = () => {
  return (
    <>
      <Sidebar />
    </>
  );
};

export default Dashboard;
