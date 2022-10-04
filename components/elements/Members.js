import member from "../../data/members.json";

/*for (let social = 0; social < member["social"].length; social++) {
  const element = member["social"][social];
  console.log(element);
}
const rows = [];
for (let i = 0; i < members["social"].length; i++) {
  // note: we are adding a key prop here to allow react to uniquely identify each
  // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  rows.push(<ObjectRow key={i} />);
}*/

export default function Members() {
  return (
    <>
      {member.map((members) => (
        <div className="w-1/2 lg:w-1/4 px-5 mb-12">
          <div
            className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
            data-wow-delay=".1s"
          >
            <img
              className="mb-6 h-36 w-36 mx-auto rounded-full object-cover object-top"
              src={`/assets/imgs/members/${members.picture}`}
              alt={members.name}
            />
            <strong className="mt-6 mb-2 text-md">{members.name}</strong>
            <p className="text-gray-500 text-xs mt-3">{members.title}</p>
            <p className="text-gray-500 text-xs mt-3"></p>
          </div>
        </div>
      ))}
    </>
  );
}
