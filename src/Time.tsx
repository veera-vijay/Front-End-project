import React from "react";
import { useState, useEffect } from "react";
import "./Time.css";


export const Time: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [running, setRunning] = useState<boolean>(true);

  const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const hoursStr = hours.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = seconds.toString().padStart(2, "0");

    setTime(`${hoursStr}:${minutesStr}:${secondsStr}`);
  };

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      updateClock();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [running]);



  return (
    <>
      <div className="Timecontainer">
        <div className="time">
          <h5>time tracker</h5>
          <h4>{time}</h4>
        </div>
        <div className="img">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/circled-pause.png"
            alt="circled-pause"
            onClick={() => setRunning(false)}
          />

          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/stop-squared.png"
            alt="stop-squared"
            onClick={() => setRunning(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Time;
