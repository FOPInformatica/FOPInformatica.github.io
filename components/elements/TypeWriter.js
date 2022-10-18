import Typewriter from "typewriter-effect";

export default function Typewrite() {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .start()
            .typeString("sin fines de lucro.")
            .callFunction(() => {});
        }}
      />
    </div>
  );
}
