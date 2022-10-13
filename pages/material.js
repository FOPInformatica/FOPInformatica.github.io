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
            <div className="text-center mb-16">
              <h2
                className="max-w-3x1 mx-auto mb-12 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <span>Material para </span>
                <span className="text-red-500">entrenamiento autodidacta</span>
              </h2>
              <p
                className="max-w-2x1 mx-auto mb-16 text-lg text-blueGray-400 wow animate__animated animate__fadeInDown"
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
                    className="text-red-500 font-semibold"
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
            <div className="max-w-lg mb-16">
              <h2
                className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <span>Libros principales</span>
                <span className="text-blue-500"> </span>
              </h2>
              <p
                className="text-base lg:text-lg text-blueGray-400 wow animate__animatedanimated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Separamos los libros en{" "}
                <span className="text-red-500">tres grupos </span> principales:
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded shadow">
              <div className="border-b border-gray-200">
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
              </div>
              <div className="border-b border-gray-200">
                <Disclosure
                  as="div"
                  className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold py-3 flex justify-between items-center mt-4">
                        <span className="text-red-500">Conceptos: </span>
                        <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                          Libros que enseñan conceptos que son prerrequisitos
                          para poder entender con mayor facilidad los
                          algoritmos.
                        </div>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        Graham, R. L., Knuth, D. E., Patashnik, O., & Liu, S.
                        (1989). Concrete mathematics: a foundation for computer
                        science. Computers in Physics, 3(5), 106-107. Bollobás,
                        B. (2012). Graph theory: an introductory course (Vol.
                        63). Springer Science & Business Media. Ne, J. (2009).
                        Invitation to discrete mathematics. Oxford University
                        Press.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="border-b border-gray-200">
                <Disclosure
                  as="div"
                  className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn leading-loose text-lg mt-6 wow animate__animated animate__fadeIn"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full font-bold py-3 flex justify-between items-center mt-4">
                        <span className="text-red-500">
                          Resolución de problemas:{" "}
                        </span>
                        <div class="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                          Libros que ayudan a mejorar la habilidad de resolución
                          de problemas al estudiante.
                        </div>
                        <PlusCircleIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-6 h-6`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                        Polya, G. (2004). How to solve it: A new aspect of
                        mathematical method (Vol. 85). Princeton university
                        press. Tao, T. (2006). Solving mathematical problems: A
                        personal perspective. Oxford University Press on Demand.
                      </Disclosure.Panel>
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
                  className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
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
                  className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
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
                      principiantes
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
                      General Sheet - Mostafa Saad, recomendado para avanzados
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
                      AtCoder problems
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
                      3
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
                    <a href="https://progvar.fun/">ProgVar.Fun</a>
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
                      Competitive programming ladders
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
                      Codedrills Recommender
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
                  className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
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
