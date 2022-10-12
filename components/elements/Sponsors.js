import sponsor from "../../data/sponsor.json";

export function Sponsor() {
  return (
    <>
      {sponsor.map((sponsors) => (
        <div className="w-full md:w-1/2 py-5 md:px-5">
          <div
            className="px-6 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
            data-wow-delay=".1s"
          >
            <div className="flex items-center mb-4">
              <a className="mx-auto" href={sponsors.link}>
                <img
                  className="visionary rounded object-cover"
                  src={`/assets/imgs/sponsors/${sponsors.img}`}
                  alt="Monst"
                />
              </a>
            </div>
            <p className="text-center leading-loose text-blueGray-400 mb-5">
              {sponsors.text}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
