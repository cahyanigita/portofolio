import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row w-full justify-between px-5 py-3 shadow-md font-bold  bg-slate-500">
      <h2 className="text-base text-white">Gita Cahyani</h2>
      <div className="flex flex-row gap-5">
        <a href="#">Home</a>
        <a href="#summmary">Summary</a>
        <a href="#project">Project</a>
        <a href="#education">Education</a>
      </div>
    </div>
  );
}

export default Navbar;
