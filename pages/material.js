import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusCircleIcon } from "@heroicons/react/outline";
const Material = () => {
  return (
    <>
      <Layout>
        <section className="pt-20 xl:bg-contain bg-blueGray-50 bg-no-repeat">
          <div className="container">
            <div className="text-center mb-2">
              <h2
                className="max-w-3x1 mx-auto mb-12 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <span>Material para </span>
                <span className="text-red-500">entrenamiento autodidacta</span>
              </h2>
              <p
                className="max-w-2x1 mx-auto mb-2 text-lg text-blueGray-400 wow animate__animated animate__fadeInDown"
                data-wow-delay=".5s"
              >
                Los interesados a participar en los procesos de selección de la
                Federación Olímpica Peruana de Informática pueden usar el
                siguiente material de referencia para prepararse:
                <br />
                <p className="py-6">
                  <strong class="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-red-500 text-white rounded">
                    Nota
                  </strong>{" "}
                  Considere el{" "}
                  <a
                    className="hover:underline text-red-500 font-semibold"
                    href="https://people.ksp.sk/~misof/ioi-syllabus/"
                  >
                    Sílabo de la IOI
                  </a>{" "}
                  como principales temas a evaluar.
                </p>
              </p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <div className="py-6 max-w-6xl mx-auto text-center">
              <div className="max-w-4x1 mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Interactúa con otros participantes y coaches{" "}
                  <span className="text-red-500"></span>{" "}
                </h2>
                <p className="mt-2 text-lg  font-heading wow animate__animatedanimated animate__fadeIn">
                  <br />
                  Canal oficial de la{" "}
                  <span className="text-red-500">FOPI </span> en discord.
                </p>
              </div>
              <div>
                <a
                  class="btn-accent hover-up-2"
                  href="https://discord.gg/qexFQjyjh4"
                >
                  <span>
                    Únete a
                    <img
                      className="logo"
                      src="/assets/imgs/logos/discord.svg"
                      alt="slack"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="py-6 max-w-6xl mx-auto text-center">
              <div className="max-w-4x1 mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mb-8 text-3xl lg:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Guías de aprendizaje <span className="text-red-500"></span>{" "}
                </h2>
                <p className="mt-2 text-3x1  font-heading wow animate__animatedanimated animate__fadeIn">
                  <div className="flex justify-center ">
                    <ul className="li w-2/3 ">
                      <li className="hover-up-2 py-4">
                        <a href="https://omegaup.com/course/introduccion_a_cpp/">
                          <i class="fa fa-book" aria-hidden="true"></i> Curso de
                          OmegaUp - Introducción a C++ (Español)
                        </a>
                      </li>
                      <li className="hover-up-2 py-4">
                        <a href="https://omegaup.com/course/intro-opi-p1/">
                          <i class="fa fa-book" aria-hidden="true"></i> Curso de
                          OmegaUp - Introducción a la Olimpiada Peruana de
                          Informática Parte 1 (Español)
                        </a>
                      </li>
                      <li className="hover-up-2 py-4">
                        <a href="https://www.youtube.com/channel/UC5fcUtSe8oPyN7sNRvLI4ow">
                          <i class="fa fa-book" aria-hidden="true"></i> Clases
                          de entrenamiento del concurso en vivo FOPI
                        </a>
                      </li>
                      <li className="hover-up-2 py-4">
                        <a href="https://usaco.guide/dashboard/">
                          <i class="fa fa-book" aria-hidden="true"></i> Guía
                          para la Olimpiada Estadounidense de Computación
                        </a>
                      </li>
                    </ul>
                  </div>
                </p>
              </div>
            </div>
            <div className="py-6 max-w-6xl mx-auto text-center">
              <div className="max-w-4x1 mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Libros principales <span className="text-red-500"></span>
                </h2>
                <p className="mt-2 text-lg  font-heading wow animate__animatedanimated animate__fadeIn">
                  <br />
                  Separamos los libros en{" "}
                  <span className="text-red-500">tres grupos </span>{" "}
                  principales:
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded shadow">
              {/*<div className="border-b border-gray-200">
                <Disclosure
                  as="div"
                  className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn leading-loose text-lg wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold py-3 flex justify-between items-center mt-4">
                        <span className="text-red-500">Algoritmos: </span>
                        <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                          Libros que enseñan conceptos de algoritmos y sus
                          aplicaciones.
                        </div>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein,
                        C. (2009). Introduction to algorithms. MIT press.
                        Kleinberg, J., & Tardos, E. (2006). Algorithm design.
                        Pearson Education India. Skiena, S. S. (2020). The
                        algorithm design manual. Springer International
                        Publishing. Jungnickel, D., & Jungnickel, D. (2005).
                        Graphs, networks and algorithms. Berlin: Springer.
                        Sedgewick, R., & Wayne, K. (2011). Algorithms (4th edn).
                        Van Kreveld, M., Schwarzkopf, O., de Berg, M., &
                        Overmars, M. (2000). Computational geometry algorithms
                        and applications. Springer. Cormen, T. H. (2013).
                        Algorithms unlocked. Mit Press. Halim, S., Halim, F.,
                        Skiena, S. S., & Revilla, M. A. (2013). Competitive
                        programming 3. Lulu Independent Publish. (Ya disponible
                        la 4ta edición. Tiene traducción al español) Laaksonen,
                        A. (2017). Competitive Programmer's Handbook. Preprint.
                        Diks, K., Idziaszek, T., Łącki, J., Radoszewski, J., &
                        Hallas, R. G. (Eds.). (2012). Looking for a Challenge?:
                        The Ultimate Problem Set from the University of Warsaw
                        Programming Competitions. Faculty of Mathematics,
                        Informatics and Mechanics University of Warsaw. (Este
                        libro es más una selección de problemas de alto nivel
                        que un libro de algoritmos en sí).
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                        </div>*/}

              <div className="border-b border-gray-200">
                <Disclosure
                  as="div"
                  className="w-full font-bold py-3 flex justify-between items-center mt-4"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full flex flex-wrap p-6 -mx-3 wow animate__ animate__fadeIn     animated animated">
                        <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                          <span className="text-red-500">Algoritmos: </span>
                        </div>
                        <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                          <p class="mb-4 lg:mb-6 leading-loose">
                            Libros que enseñan conceptos de algoritmos y sus
                            aplicaciones.
                          </p>
                        </div>
                        <div class="w-full lg:w-1/6 self-center text-xs px-3">
                          <PlusCircleIcon
                            className={`ma ${
                              open ? "transform rotate-180" : ""
                            } w-6 h-6`}
                          />
                        </div>

                        <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                          <div className="flex justify-center ">
                            <ul className="li w-2/3 ">
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Cormen, T. H., Leiserson, C. E., Rivest, R. L.,
                                & Stein, C. (2009). Introduction to algorithms.
                                MIT press.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Kleinberg, J., & Tardos, E. (2006). Algorithm
                                design. Pearson Education India.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Skiena, S. S. (2020). The algorithm design
                                manual. Springer International Publishing.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Jungnickel, D., & Jungnickel, D. (2005). Graphs,
                                networks and algorithms. Berlin: Springer.
                              </li>
                              <li className="py-4">
                                Sedgewick, R., & Wayne, K. (2011). Algorithms
                                (4th edn).
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Van Kreveld, M., Schwarzkopf, O., de Berg, M., &
                                Overmars, M. (2000). Computational geometry
                                algorithms and applications. Springer.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Cormen, T. H. (2013). Algorithms unlocked. Mit
                                Press.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Halim, S., Halim, F., Skiena, S. S., & Revilla,
                                M. A. (2013). Competitive programming 3. Lulu
                                Independent Publish. (Ya disponible la 4ta
                                edición. Tiene traducción al español)
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Laaksonen, A. (2017). Competitive Programmer's
                                Handbook. Preprint.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Diks, K., Idziaszek, T., Łącki, J., Radoszewski,
                                J., & Hallas, R. G. (Eds.). (2012). Looking for
                                a Challenge?: The Ultimate Problem Set from the
                                University of Warsaw Programming Competitions.
                                Faculty of Mathematics, Informatics and
                                Mechanics University of Warsaw. (Este libro es
                                más una selección de problemas de alto nivel que
                                un libro de algoritmos en sí).
                              </li>
                            </ul>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="border-b border-gray-200">
                <Disclosure
                  as="div"
                  className="w-full font-bold py-3 flex justify-between items-center mt-4"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full flex flex-wrap p-6 -mx-3 wow animate__ animate__fadeIn     animated animated">
                        <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                          <span className="text-red-500">Conceptos: </span>
                        </div>
                        <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                          <p class="mb-4 lg:mb-6 leading-loose">
                            Libros que enseñan conceptos que son prerrequisitos
                            para poder entender con mayor facilidad los
                            algoritmos.
                          </p>
                        </div>
                        <div class="w-full lg:w-1/6 self-center text-xs px-3">
                          <PlusCircleIcon
                            className={`ma ${
                              open ? "transform rotate-180" : ""
                            } w-6 h-6`}
                          />
                        </div>
                        <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                          <div className="flex justify-center ">
                            <ul className="li w-2/3 ">
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Graham, R. L., Knuth, D. E., Patashnik, O., &
                                Liu, S. (1989). Concrete mathematics: a
                                foundation for computer science. Computers in
                                Physics, 3(5), 106-107.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Bollobás, B. (2012). Graph theory: an
                                introductory course (Vol. 63). Springer Science
                                & Business Media.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Ne, J. (2009). Invitation to discrete
                                mathematics. Oxford University Press.
                              </li>
                            </ul>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="border-b border-gray-200">
                <Disclosure
                  as="div"
                  className="w-full font-bold py-3 flex justify-between items-center mt-4"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full flex flex-wrap p-6 -mx-3 wow animate__ animate__fadeIn     animated animated">
                        <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                          <span className="text-red-500">
                            Resolución de problemas:{" "}
                          </span>
                        </div>
                        <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                          <p class="mb-4 lg:mb-6 leading-loose">
                            Libros que ayudan a mejorar la habilidad de
                            resolución de problemas al estudiante.
                          </p>
                        </div>
                        <div class="w-full lg:w-1/6 self-center text-xs px-3">
                          <PlusCircleIcon
                            className={`ma ${
                              open ? "transform rotate-180" : ""
                            } w-6 h-6`}
                          />
                        </div>
                        <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                          <div className="flex justify-center ">
                            <ul className="li w-2/3 ">
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Graham, R. L., Knuth, D. E., Patashnik, O., &
                                Liu, S. (1989). Concrete mathematics: a
                                foundation for computer science. Computers in
                                Physics, 3(5), 106-107.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Bollobás, B. (2012). Graph theory: an
                                introductory course (Vol. 63). Springer Science
                                & Business Media.
                              </li>
                              <li className="py-4">
                                <i class="fa fa-book" aria-hidden="true"></i>{" "}
                                Ne, J. (2009). Invitation to discrete
                                mathematics. Oxford University Press.
                              </li>
                            </ul>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-red-500  rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Páginas{" "}
                  <span className="text-red-500">
                    Web <i class="fa-solid fa-globe"></i>
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-5 justify-center">
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://cp-algorithms.com/">
                      CP Algorithms <i class="fa-solid fa-globe"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="http://wcipeg.com/wiki/Special:AllPages">
                      PEGWiki <i class="fa-solid fa-globe"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Canales de{" "}
                  <span className="text-red-500">
                    Youtube <i class="fa fa-youtube"></i>
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-5 justify-center">
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://www.youtube.com/channel/UC5fcUtSe8oPyN7sNRvLI4ow">
                      Canal oficial de la FOPI<i class="fa fa-youtube"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://www.youtube.com/channel/UCBLr7ISa_YDy5qeATupf26w">
                      Algorithms Live!<i class="fa fa-youtube"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://www.youtube.com/channel/UC2D_ekI79trchAxgRq5mwpQ">
                      Errichto<i class="fa fa-youtube"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://www.youtube.com/channel/UCXbCohpE9IoVQUD2Ifg1d1g">
                      SecondThread<i class="fa fa-youtube"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://www.youtube.com/channel/UCqF1Y3wsJc-JhE9EusFyCHA">
                      Agustín Gutiérrez (elsantodel90) (Español)
                      <i class="fa fa-youtube"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Repositorios de{" "}
                  <span className="text-red-500">
                    problemas <i class="fa fa-folder-open"></i>
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-5 justify-center">
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://codeforces.com/blog/entry/65133">
                      Junior Sheet - Mostafa Saad, recomendado para
                      principiantes <i class="fa fa-folder-open"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://codeforces.com/blog/entry/79231">
                      General Sheet - Mostafa Saad, recomendado para avanzados{" "}
                      <i class="fa fa-folder-open"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://kenkoooo.com/atcoder#/table/">
                      AtCoder problems <i class="fa fa-folder-open"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://uhunt.onlinejudge.org/">
                      Uhunt, complemento online al libro Competitive Programming
                      3 <i class="fa fa-folder-open"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://progvar.fun/">
                      ProgVar.Fun <i class="fa fa-folder-open"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://codeforces.com/blog/entry/81912">
                      Competitive programming ladders{" "}
                      <i class="fa fa-folder-open"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://recommender.codedrills.io/">
                      Codedrills Recommender <i class="fa fa-folder-open"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Páginas para{" "}
                  <span className="text-red-500">
                    competir y practicar <i class="fa-solid fa-laptop-code"></i>
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-5 justify-center">
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://codeforces.com/">
                      Codeforces <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://atcoder.jp/">
                      AtCoder <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://omegaup.com/">
                      OmegaUp (Español) <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://arena.topcoder.com/index.html#/u/dashboard">
                      TopCoder <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://dmoj.ca/">
                      Dmoj <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://judge.u-aizu.ac.jp/onlinejudge/index.jsp">
                      Aizu Online Judge <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://www.codechef.com/">
                      Codechef <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="http://usaco.org/">
                      USACO <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://csacademy.com/">
                      CSAcademy <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://onlinejudge.org/index.php">
                      Online Judge <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://www.hackerrank.com/">
                      HackerRank <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://www.spoj.com/">
                      Sphere Online Judge{" "}
                      <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://vjudge.net/">
                      Virtual Judge <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://acm.timus.ru/">
                      Timus Online Judge <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://open.kattis.com/">
                      Kattis Problem Archive{" "}
                      <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://matcomgrader.com/">
                      Matcomgrader <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Calendario de{" "}
                  <span className="text-red-500">
                    Competencias <i class="fa fa-calendar"></i>
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-5 justify-center">
              <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                <div
                  className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <strong className="mt-6 mb-2 text-md">
                    <a href="https://clist.by/">
                      CLIST <i class="fa fa-calendar"></i>
                    </a>
                  </strong>
                  <p className="text-gray-500 text-xs mt-3"></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Material;
