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
                <p className="py-2">
                  Legalmente, nuestra organización opera como dos organizaciones
                  sin fines de lucro establecidas en Perú y en California.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container text-center">
            <div className="max-w-lg mx-auto mb-16">
              <span className="inline-block py-1 px-3 text-xs font-semibold bg-red-500  rounded-xl">
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
              <span className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl">
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
                  className="inline-block py-1 px-3 text-xs font-semibold bg-red-500 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                ></span>
                <h2
                  className="mt-2 text-2xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  Sólo necesitas{" "}
                  <span className="text-red-500"> querer apoyar </span>
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
      </Layout>
    </>
  );
};

export default About;
