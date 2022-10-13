export function Working() {
  return (
    <>
      <section className="pt-12">
        <div className="container py-12 mx-auto">
          <div className="flex flex-wrap">
            <div
              className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
              data-wow-delay=".5s"
            >
              <img
                className="sm:max-w-sm lg:max-w-full mx-auto"
                src="/assets/imgs/illustrations/working.svg"
                alt="Monst"
              />
            </div>
            <div className="text-center w-full md:w-1/2 px-3 order-1 md:order-1 ma">
              <div className="max-w-md-2">
                <div className="mb-4">
                  <h2
                    className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    Estamos
                    <span className="text-red-500"> trabajando </span>
                  </h2>
                </div>

                <p
                  className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  Pronto tendremos la página lista para ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
