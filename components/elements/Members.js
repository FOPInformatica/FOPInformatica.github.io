import members from "../../data/members.json";

export default function Members() {
  return (
    <>
      {members.map((member) => (
        <div
          className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 wow animate__animated animate__fadeIn animated"
          data-wow-delay=".4s"
        >
          <img
            className="h-64 w-64 mx-auto rounded object-cover object-top hover-up-5 wow animate__animated animate__fadeIn animated "
            src={`/assets/imgs/members/${member.picture}`}
            alt={member.name}
          />
          <p className="mt-6">
            <strong className="text-md">{member.name}</strong>
          </p>
          <p className="text-gray-500 text-xs mb-4">{member.title}</p>
          <div className="flex py-1 justify-center space-x-2">
            {member.social.map((item) => (
              <a href={item.link}>
                <img
                  className="icon hover-up-5"
                  src={`/assets/imgs/icons/${item.name}.svg`}
                  alt={item.name}
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
