import { useState } from "react";

export function ShowText(props) {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <>
      <input
        className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
        type={showPwd ? "text" : "password"}
        placeholder={props.texto}
      />

      <button className="ml-4" onClick={() => setShowPwd(!showPwd)}>
        {showPwd ? (
          <i class="text-xl h-6 w-6 my-auto text-blueGray-300 fa-regular fa-eye"></i>
        ) : (
          <i class="text-xl h-6 w-6 my-auto text-blueGray-300 fa-regular fa-eye-slash"></i>
        )}
      </button>
    </>
  );
}
