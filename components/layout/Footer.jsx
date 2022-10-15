import React from "react";
import Link from "next/link";
import site from "../../data/site.json";
import social from "../../data/social.json";
var phone = site["phone"];
var email = site["email"];
const Footer = () => {
  return (
    <>
      <section className="py-20" style={{ background: "#1B253A" }}>
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
            <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
              <Link href="/">
                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                  <img
                    className="h-10"
                    src="/assets/imgs/logos/logo.svg"
                    alt="FOPI"
                  />
                </a>
              </Link>
              <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0 ">
                {social.map((social) => (
                  <a
                    id="social"
                    className="inline-block px-2 "
                    href={social.link}
                  >
                    <i className={`fa ${social.icon}`}></i>
                  </a>
                ))}
                ;
              </div>
            </div>
            <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed"></p>
            </div>
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800"></p>
              <p className="lg:text-lg text-blueGray-400"></p>
            </div>
            <div className="w-full lg:w-1/5 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-white">
                Contacto
              </p>
              <p className="lg:text-lg text-blueGray-400">{phone}</p>
              <p className="lg:text-lg text-blueGray-400">{email}</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-blueGray-400">
              2022 FOPI &copy;. Todos los derechos reservados. <br />
              <a className="text-blue-400" href="#" target="_blank">
                Peruvian Federation for Olympiads in Informatics ©.
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
