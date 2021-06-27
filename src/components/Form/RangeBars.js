import React, {useEffect} from "react";

export default function RangeBars() {
  
  // set the bar values to zero af first
    useEffect(() => {
  
       document.getElementById("happy-score").value=1
       document.getElementById("sleep-hours").value=0;
      },[]);

    const happyBarMove = () => {
    const barValue = document.getElementById("happy-score").value;
    document.getElementById("happy-score-value").innerHTML = barValue;
  };

  const sleepBarMove = () => {
    const barValue = document.getElementById("sleep-hours").value;
    document.getElementById("sleep-hour-value").innerHTML = barValue;
  };

  return (
    <div className="">
      <div className="row g-3">
        <div className="col-6">
          <label htmlFor="happy-score" className="form-label">
            Happy Score
          </label>
          <input
            onChange={happyBarMove}
            type="range"
            className="form-range"
            id="happy-score"
            min="1"
            max="5"
            step="1"
          />
          <span id="happy-score-value" className="badge bg-primary">
            1
          </span>
        </div>

        <div className="col-6">
          <label htmlFor="sleep-hours" className="form-label">
            Sleep Hours
          </label>
          <input
            onChange={sleepBarMove}
            type="range"
            className="form-range"
            id="sleep-hours"
            min="0"
            max="24"
            step="1"
          />
          <span id="sleep-hour-value" className="badge bg-primary">
            0
          </span>
        </div>
      </div>
    </div>
  );
}
