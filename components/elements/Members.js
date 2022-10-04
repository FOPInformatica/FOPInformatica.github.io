import member from "../../data/members.json";

export default function Members() {
  return (
    <>
      {member.map((member) => (
        <div className="w-1/2 lg:w-1/4 px-5 mb-12">
          <div
            className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
            data-wow-delay=".1s"
          >
            <img
              className="mb-6 h-36 w-36 mx-auto rounded-full object-cover object-top"
              src={`/assets/imgs/members/${member.picture}`}
              alt={member.name}
            />
            <strong className="mt-6 mb-2 text-md">{member.name}</strong>
            <p className="text-gray-500 text-xs mt-3">{member.title}</p>
            <p className="text-gray-500 text-xs mt-3"></p>
          </div>
        </div>
      ))}
    </>
  );
}
