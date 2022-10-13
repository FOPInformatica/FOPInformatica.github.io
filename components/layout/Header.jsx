import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import nav from "../../data/navigation";
const Header = ({ handleHidden }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? "bg-transparent sticky-bar mt-4 stick"
            : "bg-transparent sticky-bar mt-4"
        }
      >
        <div id="principal" className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Link href="/">
              <a className="text-3xl font-semibold leading-none">
                <img
                  className="h-10"
                  src="/assets/imgs/logos/logo.svg"
                  alt="FOPI"
                />
              </a>
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
              {nav.map((navi) => (
                <li className="pt-4 pb-4">
                  <Link href={navi.link}>
                    <a className="text-sm font-semibold text-black hover:text-blueGray-500">
                      {navi.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <Link href="/login">
                <a className="btn-accent hover-up-2">Iniciar Sesión</a>
              </Link>
              <Link href="/signup">
                <a className="btn-primary hover-up-2">Registrarse</a>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-red-500 hover:text-red-700 rounded border border-red-200 hover:border-red-300"
                onClick={handleHidden}
              >
                <svg
                  className="fill-current h-4 w-4"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
