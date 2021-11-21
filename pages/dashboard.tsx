import React, { FC } from "react";
import { AccountIcon, DashboardIcon, SearchIcon } from "../src/icons";

const Toolbar: FC = () => {
  return (
    <div className="flex flex-row border border-bottom">
      <div className="flex items-center w-3/6 h-48">
        <div className="ml-4">
          <SearchIcon />
        </div>
        <form className="pl-3 pr-4 w-full">
          <label className="w-full inline-block">
            <input
              className="w-full h-48 focus:outline-none"
              type="text"
              placeholder="Search Scales"
            />
          </label>
        </form>
      </div>
      <div className="flex items-center justify-end w-3/6 pr-4">
        <a
          className="border rounded px-3 py-1 text-pink hover:bg-gray-100"
          href="#"
        >
          Upgrade
        </a>
        <button className="ml-2">
          <AccountIcon />
        </button>
      </div>
    </div>
  );
};

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
    <div>
      <Sidebar />
      <div className="w-main-content-width absolute left-228">
        <Toolbar />
      </div>
    </div>
  );
};

export default Dashboard;
