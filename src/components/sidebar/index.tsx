import React, { FC } from "react";
import { DashboardIcon, BrandIcon } from "../../icons";

const ToolBox: FC = () => {
  return (
    <div className="flex items-center justify-center w-52 h-48">
      <header tabIndex={0}>
        <BrandIcon />
      </header>
    </div>
  );
};

const ToolBoxPanel: FC = () => {
  return (
    <div>
      <nav tabIndex={0}>
        <ul className="px-16 py-6">
          <li className="flex items-center">
            <div className="mr-3">
              <DashboardIcon />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Sidebar: FC = () => {
  return (
    <div className="bg-dark-blue border-r-1 border-r-grey absolute h-full w-52">
      <ToolBox />
      <ToolBoxPanel />
    </div>
  );
};

export default Sidebar;
