"use client";

import React, { PropsWithChildren, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
const Layout = (props: PropsWithChildren) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div className="bg-white shadow-sm z-10">
        <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>

      <div className="grid md:grid-cols-sidebar">
        <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
