import links from "../../../data/material-links.json";

export default function LinksMaterial() {
  return (
    <section className="pb-20">
      <div className="container">
        {links.map((link) => (
          <>
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
                  {link.name}{" "}
                  <span className="text-red-500">
                    {link.color}{" "}
                    <img
                      className="h-10 inline-block"
                      src={`/assets/imgs/icons/${link.img1}.svg`}
                    />
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-5 justify-center">
              {link.contenido.map((item) => (
                <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                  <div
                    className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                    data-wow-delay=".1s"
                  >
                    <strong className="mt-6 mb-2 text-md">
                      <a href={item.link}>
                        {item.name}{" "}
                        <img
                          className="h-5 inline-block"
                          src={`/assets/imgs/icons/${link.img2}.svg`}
                        />
                      </a>
                    </strong>
                    <p className="text-gray-500 text-xs mt-3"></p>
                    <p></p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
