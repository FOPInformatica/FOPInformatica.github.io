import React, { useState } from "react";
import Link from "next/link";
import nav from "../../data/navigation";
import social from "../../data/social.json";

import site from "../../data/site.json";
var email = site["email"];
const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
          <div className="flex items-center mb-8">
            <Link href="#">
              <a className="mr-auto text-3xl font-semibold leading-none">
                <img
                  className="h-10"
                  src="/assets/imgs/logos/logo.svg"
                  alt="FOPI"
                />
              </a>
            </Link>
            <button className="navbar-close" onClick={handleRemove}>
              <svg
                className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mobile-menu">
              <li
                className={
                  isActive.key == 1
                    ? "mb-1 menu-item-has-children rounded-xl active"
                    : "mb-1 menu-item-has-children rounded-xl"
                }
                onClick={() => handleToggle(1)}
              >
                {nav.map((navi) => (
                  <li className="mb-1 rounded-xl">
                    <Link href={navi.link}>
                      <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">
                        {navi.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </li>
            </ul>

            {/*<div className="mt-4 pt-6 border-t border-blueGray-100">

              <Link href="/login">
                <a className="block px-4 py-3 mb-2 text-xs text-center text-red-500 hover:text-red-500 font-semibold leading-none border border-red-200 hover:border-red-300 rounded">
                  Iniciar Sesión
                </a>
              </Link>
              <Link href="/signup">
                <a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-red-500 hover:bg-red-700 text-white rounded">
                  Registrarse
                </a>
              </Link>

                </div>*/}

          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-blueGray-400">
              <span></span>
              <span className="text-black-500 hover:text-blue-500">
                {email}
              </span>
            </p>
            {social.map((social) => (
              <a className="inline-block px-1 " href={social.link}>
                <i className={`fa ${social.icon} icon-menu-app`}></i>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
