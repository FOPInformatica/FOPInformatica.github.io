import { useState } from "react";
const Progressbar = ({ done }) => {
  const [style, setStyle] = useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <>
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    </>
  );
};

export default Progressbar;
