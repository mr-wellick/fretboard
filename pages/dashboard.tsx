import React, { FC } from "react";
import { DashboardIcon } from "../src/icons";
// import { FretboardGrid } from "../src";

const Sidebar: FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#202a35",
        width: "228px",
        height: "100vh",
        position: "absolute",
      }}
    >
      <div className="pl-6 pr-3 py-2 text-white" style={{ height: "49px" }}>
        <p className="leading-none">
          fret <br />
          board
        </p>
      </div>
      <div>
        <div className="flex items-center px-6 py-1">
          <div className="mr-3">
            <DashboardIcon />
          </div>
          <p className="text-white">Home</p>
        </div>
      </div>
    </div>
  );
};

const Header: FC = () => {
  return (
    <div
      className="absolute"
      style={{
        left: "228px",
        width: "calc(100% - 228px)",
      }}
    >
      <div
        className="w-full border-b"
        style={{
          left: "228px",
          height: "50px",
        }}
      >
        <input className="border h-full" type="text" />
      </div>
      <div className="px-10 pt-6 pb-3">
        <h1 className="text-3xl">Welcome to your Console</h1>
      </div>
    </div>
  );
};

const Dashboard: FC = () => {
  return (
    <div>
      <Sidebar />
      <Header />
    </div>
  );
};

export default Dashboard;
