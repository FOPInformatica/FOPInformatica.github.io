import friend from "../../data/friend.json";
export function Friend() {
  return (
    <>
      {friend.map((friends) => (
        <div className="w-1/3 md:w-1/8 py-5 md:px-">
          <div
            className="px-2 py-10 bg-white  rounded hover-up-5 wow animate__animated animate__fadeIn animated  hover:border-gray-200"
            data-wow-delay=".1s"
          >
            <a href={friends.link}>
              <p className="text-center text-sm leading-loose text-blueGray-400 mb-5">
                {friends.name}
              </p>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
