import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CounterUp({ count, time }) {
  let called = false;
  return (
    <>
      {/* {/ <CountUp end={count} duration={3}/> /} */}
      <CountUp end={count} duration={time}>
        {({ countUpRef, start }) => (
          <VisibilitySensor
            onChange={() => {
              if (!called) {
                called = true;
                start();
              }
            }}
            delayedCall
          >
            <span ref={countUpRef}>count</span>
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
}

export default CounterUp;
