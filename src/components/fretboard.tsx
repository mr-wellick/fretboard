import React from "react";
import type { NextPage } from "next";

const Fretboard: NextPage = () => {
  return (
    <div className="py-7 px-4">
      <div className="grid grid-cols-17">
        <div className="transform -translate-y-2">
          <p className="border border-pink-600 rounded-full h-5 w-5 flex items-center justify-center">
            E
          </p>
        </div>
        <div className="border">1</div>
        <div className="border">2</div>
        <div className="border">3</div>
        <div className="border">4</div>
        <div className="border">5</div>
        <div className="border">6</div>
        <div className="border">7</div>
        <div className="border">8</div>
        <div className="border">9</div>
        <div className="border">10</div>
        <div className="border">11</div>
        <div className="border">12</div>
        <div className="border">13</div>
        <div className="border">14</div>
        <div className="border">15</div>
        <div className="border">16</div>
      </div>
      <div className="grid grid-cols-17">
        <div className="transform -translate-y-2">
          <p className="border border-pink-600 rounded-full h-5 w-5 flex items-center justify-center">
            B
          </p>
        </div>
        <div className="border">1</div>
        <div className="border">2</div>
        <div className="border">3</div>
        <div className="border">4</div>
        <div className="border">5</div>
        <div className="border">6</div>
        <div className="border">7</div>
        <div className="border">8</div>
        <div className="border">9</div>
        <div className="border">10</div>
        <div className="border">11</div>
        <div className="border">12</div>
        <div className="border">13</div>
        <div className="border">14</div>
        <div className="border">15</div>
        <div className="border">16</div>
      </div>
    </div>
  );
};

export default Fretboard;
