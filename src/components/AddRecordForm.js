import React, { useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import utils from "../utils/api";
export default function AddRecordForm() {
  //Set State
  const [exerciseToogle, setExerciseToogle] = useState(false);
  const [kindnessToogle, setKindnessToogle] = useState(false);

  // Functions

  // toogle buttons
  const toogleExercise = () => setExerciseToogle(!exerciseToogle);
  const toogleKindness = () => setKindnessToogle(!kindnessToogle);

  const onSubmit = (event) => {
    event.preventDefault();
    let exerciseLevel;
    // assign exercise level from the radio buttons
    const radios = document.getElementsByName("exercise-level");
    for (var radio of radios) {
      if (radio.checked) {
        exerciseLevel = radio.value;
        console.log("radio-->", radio.value);
      }
    }

    const happyScore = document.getElementById("happy-score").value;
    const sleepHours = document.getElementById("sleep-hours").value;
    const exercise = exerciseToogle;
    const kindness = kindnessToogle;
    const kindnessNote = document.getElementById("kindess-note")
      ? document.getElementById("kindess-note").value
      : "";
    const gratitudeNote = document.getElementById("grad-note").value;
// create object 
    const object = {
      happyScore: happyScore,
      sleepHours: sleepHours,
      exercise: exercise,
      exerciseLevel : exerciseLevel,
      kindness: kindness,
      kindnessNote: kindnessNote,
      gratitudeNote: gratitudeNote,
    };
    utils.addRecord(object)
  };
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
      <form
        className="needs-validation"
        id="happyForm"
        onSubmit={onSubmit}
        novalidate
      >
        <div className="row g-3">
          {/* Range bars */}
          <div className="col-sm-6">
            <label htmlFor="happy-score" className="form-label">
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
            <label htmlFor="sleep-hours" className="form-label">
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
              <div className="col-sm-10 m-3">
                <label className="form-check-label me-3">Exercise Level</label>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exercise-level"
                    id="low"
                    value="low"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Low
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exercise-level"
                    id="med"
                    value="med"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Med
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exercise-level"
                    id="high"
                    value="high"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
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
              <label htmlFor="gratNote" className="form-label">
                Kindness Note
              </label>
              <textarea
                id="kindess-note"
                name="kindess-note"
                form="happyForm"
              ></textarea>
            </div>
          ) : (
            <h1></h1>
          )}

          <hr className="my-4" />
          <div className="row g-3">
            <label htmlhtmlFor="gratNote" className="form-label">
              Gratitude Note
            </label>
            <textarea
              id="grad-note"
              name="grat-note"
              form="happyForm"
            ></textarea>
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
