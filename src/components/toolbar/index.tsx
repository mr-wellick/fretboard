import React, { FC } from "react";
import { AccountIcon, SearchIcon } from "../../icons";

const Toolbar: FC = () => {
  return (
    <div className="flex flex-row border-b">
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

export default Toolbar;
