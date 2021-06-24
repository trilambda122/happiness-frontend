import React, { useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export default function AddRecordForm() {
  //Set State
  const [exerciseToogle, setExerciseToogle] = useState();
  const [kindnessToogle, setKindnessToogle] = useState();

  // Functions

  // toogle buttons
  const toogleExercise = () => setExerciseToogle(!exerciseToogle);
  const toogleKindness = () => setKindnessToogle(!kindnessToogle);

  // range bars
  const rangeBarmove = () => {
    const barValue = document.getElementById("sleep-hours").value;
    document.getElementById("sleep-hour-value").innerHTML = barValue;
  };

  const rangeHappyScoremove = () => {
    const barValue = document.getElementById("happy-score").value;
    document.getElementById("happy-score-value").innerHTML = barValue;
  };

  return (
    <div>
      <form className="needs-validation" id="happyForm" novalidate>
        <div className="row g-3">
          {/* Range bars */}
          <div className="col-sm-6">
            <label for="happy-score" className="form-label">
              Happy Score
            </label>

            <input
              onChange={rangeHappyScoremove}
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="1"
              id="happy-score"
            ></input>
            <span id="happy-score-value" className="badge bg-secondary">
              --
            </span>
          </div>

          <div className="col-sm-6">
            <label for="sleep-hours" className="form-label">
              Sleep Hours
            </label>

            <input
              onChange={rangeBarmove}
              type="range"
              className="form-range"
              min="0"
              max="24"
              step="1"
              id="sleep-hours"
            ></input>
            <span id="sleep-hour-value" className="badge bg-secondary">
              --
            </span>
          </div>

          {/* Toogle switches */}
          <div className="container">
            <div className="col-sm-3">
              <BootstrapSwitchButton
                id="exercise-switch"
                checked={toogleExercise}
                size="sm"
                onChange={toogleExercise}
              />
              <p className="form-label">Exercise</p>
            </div>
            {exerciseToogle ? (
              <div className='col-sm-10 m-3'>
                <label className="form-check-label me-3" >Exercise Level</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="low"
                    value="low"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Low
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="med"
                    value="med"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    Med
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="high"
                    value="high"
                    
                  />
                  <label className="form-check-label" for="inlineRadio3">
                    High
                  </label>
                </div>
              </div>
            ) : (
              <h1></h1>
            )}

            <div className="col-sm-3">
              <BootstrapSwitchButton
                id="kindness-switch"
                checked={toogleKindness}
                size="sm"
                onChange={toogleKindness}
              />
              <p className="form-label">Kindness</p>
            </div>
          </div>
          {kindnessToogle ? (
            <div className="row g-3">
              <hr className="my-4" />
              <label for="gratNote" className="form-label">
                Kindness Note
              </label>
              <textarea name="gratNote" form="happyForm">
                Enter text here...
              </textarea>
            </div>
          ) : (
            <h1></h1>
          )}

          <hr className="my-4" />
          <div className="row g-3">
            <label for="gratNote" className="form-label">
              Gratitude Note
            </label>
            <textarea name="gratNote" form="happyForm">
              Enter text here...
            </textarea>
          </div>
          <hr className="my-4" />
          <button className=" col-sm-4  btn btn-primary btn-lg" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
