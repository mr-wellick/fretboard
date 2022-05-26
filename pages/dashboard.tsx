import React, { FC } from "react";
import Sidebar from "../src/components/sidebar";
// import Toolbar from "../src/components/toolbar";
// import { FretboardGrid } from "../src";

const Dashboard: FC = () => {
  return (
    <>
      <Sidebar />
      <div className="w-main-content-width ml-228">
        {/* <Toolbar /> */}
        {/* <div className="px-10 pt-6 pb-3 border-b">
          <p className="text-2xl font-light">Welcome to your Console</p>
        </div> */}
        {/* <div className="px-10 pt-6 pb-20">
          <div className="flex">
            <div className="w-full">
              <FretboardGrid />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
