import React from "react";
import Layout from "../components/layout/Layout";
import { Sponsor } from "../components/elements/Sponsors";
import { Friend } from "../components/elements/Friend";
const Sponsors = () => {
  return (
    <>
      <Layout>
        {/*<section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
          <div class="container px-4 mx-auto">
            <div class="pt-12 text-center">
              <div class="max-w-2xl mx-auto mb-8">
                <h2
                  class="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__ animate__fadeIn  animated"
                  style="visibility: visible; animation-name: fadeIn;"
                >
                  Nuestros Auspiciadores
                </h2>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Nuestros Auspiciadores
            </h1>
          </div>
  </section>*/}
        <section className="pb-16 pt-20 xl:bg-contain bg-blueGray-50 bg-no-repeat">
          <div className="container">
            <div className="text-center mb-16">
              <h2
                className="max-w-3x1 mx-auto mb-12 text-5xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <span>Nuestros</span>
                <span className="text-red-500"> Auspiciadores</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="py-20 bg-transparent">
          <div className="container">
            <div className="max-w-lg mx-auto mb-12 text-center">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              ></span>
              <h2
                className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                Visionary<span className="text-blue-500"></span> <br />
              </h2>
            </div>
            <div className="flex flex-wrap">
              <Sponsor />
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a className="mx-auto" href="https://valmersys.com">
                      <img
                        className="visionary rounded object-cover"
                        src="/assets/imgs/sponsors/valmer.png"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    Valmer Systems es una empresa especializada en implementar
                    sistemas de ingeniería, servicios cloud e infraestructura
                    on-premise que busca impulsar soluciones tecnológicas de
                    clase mundial que permitan a sus clientes concentrarse en su
                    negocio y hacer lo que mejor saben hacer.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-lg mx-auto mb-12 text-center">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              ></span>
              <h2
                className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                Maintainer<span className="text-blue-500"></span> <br />
              </h2>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a className="mx-auto" href="https://finsmart.pe/">
                      <img
                        className="h-full w-full rounded object-cover"
                        src="/assets/imgs/sponsors/finsmart.png"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    Finsmart es una Fintech 100% peruana que tiene como
                    propósito conectar digitalmente a personas y empresas que
                    necesitan liquidez y a quienes quieren invertir en ellas.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a className="mx-auto" href="https://ucsp.edu.pe/">
                      <img
                        className="h-full w-full rounded object-cover"
                        src="/assets/imgs/sponsors/ucsp.svg"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    Gran parte del equipo fundador de la FOPI son egresados de
                    la Universidad Católica San Pablo. Seguimos demostrando el
                    compromiso con el futuro de la educación en el Perú.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a
                      className="mx-auto"
                      href="https://www.linkedin.com/in/andre-raul-quispesaravia-ildefonso-1a655a44/"
                    >
                      <img
                        className="maintainer rounded object-cover"
                        src="/assets/imgs/sponsors/andreq.jpeg"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    André Quispesaravia
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto mb-12 text-center">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              ></span>
              <h2
                className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                Contributor<span className="text-blue-500"></span> <br />
              </h2>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a
                      className="mx-auto"
                      href="https://www.facebook.com/cinthia.elguedas"
                    >
                      <img
                        className="h-48 rounded object-cover"
                        src="/assets/imgs/sponsors/cinthia.png"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    Cinthia Elguedas
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a
                      className="mx-auto"
                      href="https://www.linkedin.com/company/fromsolvers/about/"
                    >
                      <img
                        className="h-48 rounded object-cover"
                        src="/assets/imgs/sponsors/fromsolvers.png"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    FromSolvers
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto mb-12 text-center">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              ></span>
              <h2
                className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                Supporter<span className="text-blue-500"></span> <br />
              </h2>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/5 py-5 ">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a
                      className="mx-auto"
                      href="https://www.linkedin.com/in/cesar-erquinigo/"
                    >
                      <img
                        className="sup rounded object-cover"
                        src="/assets/imgs/sponsors/cesarerquinigo.jpeg"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    Cesar Erquinigo
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/5 py-5 ">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a
                      className="mx-auto"
                      href="https://www.instagram.com/pchujoy/"
                    >
                      <img
                        className="sup rounded object-cover"
                        src="/assets/imgs/sponsors/phillipchujoy.jpeg"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    Phillip Chu Joy
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/5 py-5 ">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a className="mx-auto" href="https://emptor.io/">
                      <img
                        className="sup rounded object-cover"
                        src="/assets/imgs/sponsors/emptor.png"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5"></p>
                </div>
              </div>
              <div className="w-full md:w-1/5 py-5 ">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a
                      className="mx-auto"
                      href="https://www.linkedin.com/in/johnerikmetcalf/"
                    >
                      <img
                        className="sup rounded object-cover"
                        src="/assets/imgs/sponsors/johnmetcalf.jpeg"
                        alt="Monst"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    John Metcalf
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/5 py-5">
                <div
                  className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <a className="mx-auto" href="https://jaguarsoft.pe/">
                      <img
                        className="sup rounded object-cover"
                        src="/assets/imgs/sponsors/jaguar_soft.png"
                        alt="Jaguar"
                      />
                    </a>
                  </div>
                  <p className="text-center leading-loose text-blueGray-400 mb-5">
                    Jaguar Soft
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-lg mx-auto mb-12 text-center">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              ></span>
              <h2
                className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                Friend<span className="text-blue-500"></span> <br />
              </h2>
            </div>

            <div className="flex flex-wrap space-even">
              <Friend />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Sponsors;
