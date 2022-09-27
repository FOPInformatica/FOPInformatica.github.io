import CounterUp from "../components/elements/Counterup";
import TextEffect from "../components/elements/TextEffect";
import Layout from "../components/layout/Layout";
import stats from "../data/site-stats.json";
import collaborators from "../data/collaborators.json";
import members from "../data/members.json";
import site from "../data/site.json";
//import Slider1 from "../components/slider/Slider1";
//import Progressbar from "../components/progressbar/Progressbar1";
import Partners from "../components/elements/Partners";
var now = new Date();
var year = now.getFullYear();
var memb = Object.keys(members).length;
var coll = Object.keys(collaborators).length;
var email = `mailto:${site["email"]}?subject=Quiero ayudar a la FOPI!`;
function Home() {
  return (
    <>
      <Layout>
        <section
          className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24"
          style={
            {
              /*backgroundImage: "url('assets/imgs/backgrounds/antalaya.jpeg')",*/
            }
          }
        >
          <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
            <div
              className="absolute"
              style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}
            >
              <img className="jump rounded wow animate__animated animate__fadeIn" />
            </div>
          </div>
          <div id="contest" className="container px-4 mx-auto ">
            <div className="text-center text-3xl  mb-4 font-bold py-6">
              Venimos trabajando por más de 6 años por la educación del Perú.
            </div>
            <div className="flex flex-wrap justify-between pt-8 pb-16">
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading"> </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    <CounterUp count={memb} time={1} />
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Miembros principales
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading"> </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    <CounterUp count={coll} time={1} />
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Miembros asociados
                  </p>
                </div>
              </div>
              {stats.map((stats) => (
                <div
                  className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="sm:py-2 ml-2 sm:ml-6">
                    <span className="sm:text-2xl font-bold font-heading count">
                      <CounterUp count={stats.number} time={1} /> {stats.plus}
                    </span>
                    <p className="text-xs sm:text-base text-blueGray-400">
                      {stats.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="partners">
            <div class="partners-logo">
              <Partners />
            </div>
            <div>
              <a class="btn-primary hover-up-2" href={email}>
                Sé nuestro partner
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
export default Home;
