import React, { useState } from "react";
import classes from "./Bpm.module.css";

let lastTapSeconds = 0;
let bpm = 0;
let total = 0;
let count = -1;

function Bpm() {
  const [curBpm, setCurBpm] = useState(0);

  // Calculate BPM
  const calculationHandler = (e) => {
    e.preventDefault();

    let tapSeconds = new Date().getTime();

    // Initialize first tap
    if (count === -1 && lastTapSeconds === 0) {
      count += 1;
      lastTapSeconds = tapSeconds;
    } else {
      count += 1;
      bpm = (1 / ((tapSeconds - lastTapSeconds) / 1000)) * 60;
      lastTapSeconds = tapSeconds;

      // Used to create average
      total = total + bpm;

      setCurBpm(Math.floor(total / count));
    }
  };

  // Reset Calculation to -
  const resetHandler = (e) => {
    e.preventDefault();
    lastTapSeconds = 0;
    bpm = 0;
    total = 0;
    count = -1;
    setCurBpm(0);
  };

  return (
    <section className={classes.calculator}>
      <h2>Start Clicking the Button!</h2>

      {/* BPM calculation */}
      <div className={classes.valueField}>{curBpm === 0 ? "-" : curBpm}</div>

      <div className={classes.buttons}>
        <button onClick={calculationHandler} className={classes.btn}>
          Click Me!
        </button>
        <div>
          <button className={classes.subBtn}>Save BPM</button>
          <button onClick={resetHandler} className={classes.subBtn}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default Bpm;
