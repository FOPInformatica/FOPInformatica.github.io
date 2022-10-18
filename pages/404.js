import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Layout>
        <section className="pt-20 pb-32">
          <div className="container text-center">
            <img
              className="mb-4 mx-auto md:max-w-md mb-12 wow animate__animated animate__fadeIn"
              src="/assets/imgs/illustrations/404.svg"
              alt="FOPI"
            />
            <span
              className="text-4xl text-red-500 font-bold font-heading wow animate__animated animate__fadeIn"
              data-wow-delay=".2s"
            >
              Error 404
            </span>
            <h2
              className="mb-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              Página no encontrada :(
            </h2>
            <p
              className="mb-6 text-blueGray-400 wow animate__animated animate__fadeIn"
              data-wow-delay=".4s"
            ></p>
            <div>
              <Link href="/">
                <a
                  className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-red-500 hover:bg-red-700 rounded wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  Ir al inicio
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Custom404;
