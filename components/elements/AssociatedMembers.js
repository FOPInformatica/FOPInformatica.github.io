import collaborators from "../../data/collaborators.json";

export default function Collaborators() {
  return (
    <>
      {collaborators.map((collaborators) => (
        <div className="w-1/2 lg:w-1/4 px-5 mb-12">
          <div
            className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
            data-wow-delay=".1s"
          >
            <strong className="mt-6 mb-2 text-md">{collaborators.name}</strong>
            <p className="text-gray-500 text-xs mt-3">{collaborators.title}</p>
            <p></p>
          </div>
        </div>
      ))}
    </>
  );
}
