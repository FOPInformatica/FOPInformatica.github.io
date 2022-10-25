import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { useState } from "react";
import LinksMaterial from "../components/page/material/Links";
const Material = () => {
  const [showContent, setShowContent] = useState(false);
  const [content, setcontent] = useState(false);
  const [contenido, setcontenido] = useState(false);
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
              <div className="border-b border-gray-200">
                <div className="w-full py-3 flex justify-between items-center mt-4">
                  <div className="w-full flex flex-wrap p-6 -mx-3 wow animate__ animate__fadeIn     animated animated">
                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                      <span className="text-red-500">Algoritmos: </span>
                    </div>
                    <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                      <p class="mb-4 lg:mb-6 leading-loose text-center">
                        Libros que enseñan conceptos de algoritmos y sus
                        aplicaciones.
                      </p>
                    </div>
                    <div class="w-full lg:w-1/6 text-xs px-3">
                      <div className="flex justify-center">
                        <img
                          onClick={() => setShowContent(!showContent)}
                          className={
                            showContent
                              ? "transform rotate-180 icon-plus cursor-pointer"
                              : "icon-plus cursor-pointer"
                          }
                          src="/assets/imgs/icons/circle-plus.svg"
                        />
                      </div>
                    </div>

                    <div
                      className={
                        showContent ? "text-gray-700 text-sm mt-2 ma" : "none"
                      }
                    >
                      <div className="flex justify-center ">
                        <ul className="li w-2/3 text-center text-gray-100">
                          <li className="py-4 ">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Cormen, T. H., Leiserson, C. E., Rivest, R. L., &
                            Stein, C. (2009). Introduction to algorithms. MIT
                            press.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Kleinberg, J., & Tardos, E. (2006). Algorithm
                            design. Pearson Education India.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Skiena, S. S. (2020). The algorithm design manual.
                            Springer International Publishing.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Jungnickel, D., & Jungnickel, D. (2005). Graphs,
                            networks and algorithms. Berlin: Springer.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Sedgewick, R., & Wayne, K. (2011). Algorithms (4th
                            edn).
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Van Kreveld, M., Schwarzkopf, O., de Berg, M., &
                            Overmars, M. (2000). Computational geometry
                            algorithms and applications. Springer.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Cormen, T. H. (2013). Algorithms unlocked. Mit
                            Press.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Halim, S., Halim, F., Skiena, S. S., & Revilla, M.
                            A. (2013). Competitive programming 3. Lulu
                            Independent Publish. (Ya disponible la 4ta edición.
                            Tiene traducción al español)
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Laaksonen, A. (2017). Competitive Programmer's
                            Handbook. Preprint.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Diks, K., Idziaszek, T., Łącki, J., Radoszewski, J.,
                            & Hallas, R. G. (Eds.). (2012). Looking for a
                            Challenge?: The Ultimate Problem Set from the
                            University of Warsaw Programming Competitions.
                            Faculty of Mathematics, Informatics and Mechanics
                            University of Warsaw. (Este libro es más una
                            selección de problemas de alto nivel que un libro de
                            algoritmos en sí).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200">
                <div className="w-full py-3 flex justify-between items-center mt-4">
                  <div className="w-full flex flex-wrap p-6 -mx-3 wow animate__ animate__fadeIn     animated animated">
                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                      <span className="text-red-500">Conceptos: </span>
                    </div>
                    <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                      <p class="mb-4 lg:mb-6 leading-loose text-center">
                        Libros que enseñan conceptos que son prerrequisitos para
                        poder entender con mayor facilidad los algoritmos.
                      </p>
                    </div>
                    <div class="w-full lg:w-1/6 text-xs px-3">
                      <div className="flex justify-center">
                        <img
                          onClick={() => setcontenido(!contenido)}
                          className={
                            contenido
                              ? "transform rotate-180 icon-plus cursor-pointer"
                              : "icon-plus cursor-pointer"
                          }
                          src="/assets/imgs/icons/circle-plus.svg"
                        />
                      </div>
                    </div>

                    <div
                      className={
                        contenido ? "text-gray-700 text-sm mt-2 ma" : "none"
                      }
                    >
                      <div className="flex justify-center  ">
                        <ul className="li w-2/3 text-center text-gray-100">
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Graham, R. L., Knuth, D. E., Patashnik, O., & Liu,
                            S. (1989). Concrete mathematics: a foundation for
                            computer science. Computers in Physics, 3(5),
                            106-107.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Bollobás, B. (2012). Graph theory: an introductory
                            course (Vol. 63). Springer Science & Business Media.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Ne, J. (2009). Invitation to discrete mathematics.
                            Oxford University Press.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200">
                <div className="w-full py-3 flex justify-between items-center mt-4">
                  <div className="w-full flex flex-wrap p-6 -mx-3 wow animate__ animate__fadeIn     animated animated">
                    <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                      <span className="text-red-500">
                        Resolución de problemas:{" "}
                      </span>
                    </div>
                    <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                      <p class="mb-4 lg:mb-6 leading-loose text-center">
                        Libros que ayudan a mejorar la habilidad de resolución
                        de problemas al estudiante.
                      </p>
                    </div>
                    <div class="w-full lg:w-1/6 text-xs px-3">
                      <div className="flex justify-center">
                        <img
                          onClick={() => setcontent(!content)}
                          className={
                            content
                              ? "transform rotate-180 icon-plus cursor-pointer"
                              : "icon-plus cursor-pointer"
                          }
                          src="/assets/imgs/icons/circle-plus.svg"
                        />
                      </div>
                    </div>

                    <div
                      className={
                        content ? "text-gray-700 text-sm mt-2 ma" : "none"
                      }
                    >
                      <div className="flex justify-center  ">
                        <ul className="li w-2/3 text-center text-gray-100">
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Polya, G. (2004). How to solve it: A new aspect of
                            mathematical method (Vol. 85). Princeton university
                            press.
                          </li>
                          <li className="py-4">
                            <img
                              className="h-4 inline opacity-40"
                              src="assets/imgs/icons/book.svg"
                            />{" "}
                            Tao, T. (2006). Solving mathematical problems: A
                            personal perspective. Oxford University Press on
                            Demand.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LinksMaterial />
      </Layout>
    </>
  );
};

export default Material;
