"use client";
import Link from "next/link";
import React, { useState } from "react";
import DarkModeBtn from "./DarkModeBtn";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Posts",
      link: "/posts"
    }
  ];

  return (
    <header className="py-2 border border-x-0 border-t-0 sticky top-0 bg-white dark:bg-inherit">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2>
            <Link href={"/"}>daffadmr</Link>
          </h2>
          <button
            className={`flex flex-col gap-[6px] md:hidden ${
              showNav ? "show-nav" : ""
            }`}
            onClick={() => setShowNav(!showNav)}
          >
            <span className="hamburger-line origin-top-left transition duration-500 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line origin-bottom-left transition duration-500 ease-in-out"></span>
          </button>
          <nav
            className={`bg-white border md:border-0 dark:bg-slate-800  dark:border-white absolute right-5 top-16 max-w-[250px] w-[80vw] py-0 shadow-lg rounded-lg md:flex md:static md:bg-transparent md:shadow-none md:py-0 md:justify-end ${
              showNav ? "" : "hidden"
            }`}
          >
            <div className="flex flex-col-reverse md:flex-row gap-5 p-2 pb-5 md:p-0">
              <ul className="flex flex-col md:flex-row gap-3 md:items-center">
                {pages.map((page) => {
                  return (
                    <li className="inline-block hover:bg-gray-300 dark:hover:bg-slate-600 px-[5px] rounded">
                      <Link className="block" href={page.link} onClick={()=>setShowNav(false)}>
                        {page.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-end">
                <DarkModeBtn />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
