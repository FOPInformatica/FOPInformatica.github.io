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
        <div
          className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated"
          data-wow-delay=".4s"
        >
          <img
            className="h-64 w-64 mx-auto rounded object-cover object-top"
            src={`/assets/imgs/members/${members.picture}`}
            alt={members.name}
          />
          <p className="mt-6">
            <strong className="text-md">{members.name}</strong>
          </p>
          <p className="text-gray-500 text-xs mb-4">{members.title}</p>
          <div className="flex py-1 justify-center space-x-2"></div>
        </div>
      ))}
    </>
  );
}
