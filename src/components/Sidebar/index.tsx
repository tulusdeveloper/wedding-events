"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Socials from "../Socials";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/logo/blissnbloomslogo.png"}
            alt="Logo"
            priority
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >

        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar text-center  flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6  text-center">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("Home")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/" ||
                            pathname.includes("Home")) &&
                          "bg-graydark dark:bg-meta-4"
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        Home
                      </Link>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}
              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href="/about"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("about") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  About
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Forms --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/forms" || pathname.includes("forms")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/forms" ||
                            pathname.includes("forms")) &&
                          "bg-graydark dark:bg-meta-4"
                          }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        Services
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${!open && "hidden"
                          }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/forms/form-elements"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black dark:text-white duration-300 ease-in-out hover:text-white ${pathname === "/forms/form-elements" &&
                                "text-white"
                                }`}
                            >
                              Form Elements
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/forms/form-layout"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-black dark:text-white duration-300 ease-in-out hover:text-white ${pathname === "/forms/form-layout" &&
                                "text-white"
                                } `}
                            >
                              Form Layout
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Tables --> */}
              <li>
                <Link
                  href="/tables"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("tables") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  Tables
                </Link>
              </li>
              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <Link
                  href="/contact"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("about") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  Contact
                </Link>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div><br />

          {/* <!-- Sidebar Menu --> */}
          <hr /><br />
          <div className="mb-12 lg:mb-16 text-center items-center">
            <ul>
              <li>
                <p className="text-black dark:text-white">
                  {" "}
                  <a
                    href="mailto:info@blissnblooms.com"
                    className="text-black dark:text-white hover:underline"
                  >
                    info@blissnblooms.com
                  </a>
                </p>
              </li>
              <li>
                <p className=" text-black dark:text-white">
                  {" "}
                  <a
                    href="tel:+254712345678"
                    className="text-black dark:text-white hover:underline"
                  >
                    +254 712 345 678
                  </a>
                </p>
              </li>
              <li>
                <p className="text-black dark:text-white">
                  {" "}
                  <span className="text-black dark:text-white">
                    Bliss & Blooms HQ, Eldoret, Kenya
                  </span>
                </p>
              </li>
              {/* <!-- Other contact information --> */}
            </ul>
          </div><hr />
          <Socials />

        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
