import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { ShowText } from "../components/elements/ShowText";

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <>
      <Layout>
        <section className="relative pb-20">
          <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto">
            <div
              className="flex items-center h-full wow animate__animated animate__fadeIn animated"
              data-wow-delay=".1s"
            >
              <img
                className="lg:max-w-lg mx-auto"
                src="/assets/imgs/illustrations/team_work.svg"
                alt="login"
              />
            </div>
          </div>
          <div className="container">
            <div className="relative flex flex-wrap pt-20">
              <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
                <div
                  className="w-full max-w-lg mx-auto lg:mx-0 my-auto wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".3s"
                >
                  <span className="text-sm text-blueGray-400">
                    Inicia Sesión
                  </span>
                  <h4 className="mb-6 text-3xl">Únete a nuestra comunidad</h4>
                  <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                    <input
                      className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                      type="email"
                      placeholder="name@email.com"
                    />
                    <svg
                      className="h-6 w-6 ml-4 my-auto text-blueGray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex mb-6 px-4 bg-blueGray-50 rounded border border-gray-200">
                    <ShowText texto="Ingrese su contraseña" />
                  </div>

                  {/*<div
                    className="float-left mb-6 wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".1s"
                  >
                    <label className="inline-flex text-xs">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked
                      />
                      <span className="ml-2">
                        I agree to{" "}
                        <Link href="/about">
                          <a className="underline hover:text-blueGray-500">
                            Police privacy
                          </a>
                        </Link>{" "}
                        and{" "}
                        <Link href="/about">
                          <a className="underline hover:text-blueGray-500">
                            Terms of Use
                          </a>
                        </Link>
                      </span>
                    </label>
                    </div>*/}
                  <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-red-500 hover:bg-red-700 rounded">
                    Iniciar Sesión
                  </button>
                  {/*<p className="my-6 text-xs text-blueGray-400 text-center font-semibold">
                    or continue with
                  </p>
                  <button
                    className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded"
                    href="#"
                  >
                    <img
                      className="h-6 pr-10"
                      src="/assets/imgs/logos/facebook-sign.svg"
                    />
                    <span>Sign In with Facebook</span>
                  </button>
                  <button
                    className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded"
                    href="#"
                  >
                    <img
                      className="h-6 pr-10"
                      src="/assets/imgs/logos/google-sign.svg"
                    />
                    <span>Sign In with Google</span>
                  </button>*/}
                </div>

                <div className="w-full mt-12 mx-auto text-center">
                  <p>
                    ¿Aún no tienes una cuenta?{" "}
                    <Link href="/signup">
                      <a
                        className="inline-block text-xs text-red-500 hover:text-red-700 font-semibold leading-none wow animate__animated animate__fadeIn animated"
                        data-wow-delay=".1s"
                      >
                        Registrate ahora
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Login;
