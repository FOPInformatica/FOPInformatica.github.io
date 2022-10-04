import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import CounterUp from "../components/elements/Counterup";
import TextEffect from "../components/elements/TextEffect";
import Members from "../components/elements/Members";
import Collaborators from "../components/elements/AssociatedMembers";
const About = () => {
  return (
    <>
      <Layout>
        <section className="py-40 bg-blueGray-50" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
                  <span>Somos una </span>
                  <span className="text-red-500">
                    organización
                    <br />
                    <TextEffect text1="sin fines de lucro" />
                  </span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-blueGray-400 leading-loose wow animate__animatedanimated animate__fadeIn">
                  Buscamos organizar la selección, preparación y recaudación de
                  fondos para los estudiantes que representan al Perú en
                  diversas Olimpiadas Internacionales de programación, así como
                  ayudar a los colegios y otras instituciones educativas a
                  mejorar la alfabetización tecnólogica en el Perú a través de
                  la programación competitiva.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container text-center">
            <div className="max-w-lg mx-auto mb-16">
              <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
                {" "}
              </span>
              <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                Miembros <span className="text-red-500"> Permanentes </span>
              </h2>
              <p className="text-blueGray-400 leading-loose"></p>
            </div>
            <div className="flex flex-wrap -mx-5 justify-center">
              <Members />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container text-center">
            <div className="max-w-lg mx-auto mb-16">
              <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
                {" "}
              </span>
              <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                Miembros <span className="text-red-500"> Asociados </span>
              </h2>
              <p className="text-blueGray-400 leading-loose"></p>
            </div>
            <div className="flex flex-wrap -mx-5 justify-center">
              <Collaborators />
            </div>
          </div>
        </section>
        <section className="pb-20">
          <div className="container">
            <div className="max-w-6xl mx-auto text-center">
              <div className="max-w-4x1 mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mt-2 text-2xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Sólo necesitas{" "}
                  <span className="text-red-500">querer apoyar</span>
                  para poder ser parte de nosotros.{" "}
                </h2>
                <p className="mt-2 text-3x1  font-heading wow animate__animatedanimated animate__fadeIn">
                  <br />
                  Únete a nuestro Slack y preséntate para poder contactarnos.
                </p>
              </div>
              <div>
                <a
                  class="btn-accent hover-up-2"
                  href="https://join.slack.com/t/federacion-opi/shared_invite/zt-19thx57zp-jrIMCwUHBfLeY1zlR6xu~g"
                >
                  <span>
                    Únete al
                    <img
                      className="logo"
                      src="https://a.slack-edge.com/4f28/img/slack_logo.svg"
                      alt="slack"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="relative">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
                    <div className="container">
                        <div className="relative flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                                <Link href="/"><a className="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".1s">
                                    <img className="h-10" src="/assets/imgs/logos/monst-logo.svg" alt="Monst" />
                                </a></Link>
                                <div className="mt-12 mb-16">
                                    <p className="mb-4 text-xs text-blueGray-400 text-center lg:text-left wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".1s">Subscribe and stay fully connected with product.</p>
                                    <div className="flex flex-wrap lg:flex-nowrap items-center wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".3s">
                                        <div className="flex w-full lg:w-2/3 mb-3 lg:mb-0 px-4 bg-blueGray-50 rounded">
                                            <svg className="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                            <input className="w-full py-4 pl-3 text-xs text-blueGray-400 bg-blueGray-50 outline-none" type="text" placeholder="Type your e-mail" />
                                        </div>
                                        <button className="hover-up-2 w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Sign Up</button>
                                    </div>
                                </div>
                                <div className="hidden lg:block wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".5s">
                                    <p className="text-xs text-blueGray-400">&copy; 2021. All rights reserved.</p>
                                    <div className="-mx-2 mt-4">
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                        </a></Link>
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                                        </a></Link>
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full lg:w-1/2 px-4 pt-40 lg:pl-12">
                                <div className="flex flex-row flex-wrap justify-around mb-12">
                                    <div className="w-1/2 lg:w-auto mb-12 wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".1s">
                                        <h5 className="mb-6 text-lg font-bold font-heading">About</h5>
                                        <ul className="space-y-3">
                                            <li><Link href="/about"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">About us</a></Link></li>
                                            <li><Link href="/portfolio"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Portfolio</a></Link></li>
                                            <li><Link href="/services"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Services</a></Link></li>
                                            <li><Link href="/contact"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Contact</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="w-1/2 lg:w-auto mb-12 wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".3s">
                                        <h5 className="mb-6 text-lg font-bold font-heading">Quick links</h5>
                                        <ul className="space-y-3">
                                            <li><Link href="/team"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Team</a></Link></li>
                                            <li><Link href="/pricing"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Pricing</a></Link></li>
                                            <li><Link href="/testimonials"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Testimonials</a></Link></li>
                                            <li><Link href="/faqs"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Faqs</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-auto mb-4 wow animate__animatedanimated animate__fadeIn animated" data-wow-delay=".5s">
                                        <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                                        <ul className="space-y-3">
                                            <li><Link href="/blog"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Bussiness</a></Link></li>
                                            <li><Link href="/blog-2"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Marketing</a></Link></li>
                                            <li><Link href="/blog-single"><a className="text-lg text-blueGray-400 hover:text-blueGray-500">Single</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="lg:hidden text-center">
                                    <p className="text-xs text-blueGray-400">&copy; 2021. All rights reserved.</p>
                                    <div className="-mx-2 mt-4">
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                        </a></Link>
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                                        </a></Link>
                                        <Link href="#"><a className="inline-block px-2">
                                            <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
      </Layout>
    </>
  );
};

export default About;
