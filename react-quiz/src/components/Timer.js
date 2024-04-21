import React, { useEffect } from "react";

const Timer = ({ secondsRemaining, dispatch }) => {
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <div className="timer">
      {min < 10 && "0"}
      <span>{min}</span> : {sec < 10 && "0"}
      <span>{sec}</span>
    </div>
  );
};

export default Timer;
