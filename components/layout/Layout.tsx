"use client";

import React, { PropsWithChildren, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Layout = (props: PropsWithChildren) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100 lg:m-5">
      <div className="bg-white shadow-sm z-10">
        <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>

      <div className="grid lg:grid-cols-sidebar">
        <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <div className="pt-5">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
