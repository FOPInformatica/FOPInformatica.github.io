import React from "react";
import ReactTypingEffect from "react-typing-effect";
const TextEffect = ({ text1, text2 }) => {
  return (
    <>
      <ReactTypingEffect text={text1} typingDelay={1} eraseDelay={9999999} />
    </>
  );
};

export default TextEffect;
