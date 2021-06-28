import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AddRecordForm from "./AddRecordForm";
import utils from "../utils/api";
export default function AddRecord() {
  const history = useHistory();
  const [addRecord, setAddRecord] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const onClick = () => {
    setAddRecord(!addRecord);
    setExpanded(!expanded);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("event-->", event.target);
    const happyScore = document.getElementById("happy-score").value;
    const sleepHours = document.getElementById("sleep-hours").value;
    const exercise = document.getElementById("toogle-exercise").value;
    const kindness = document.getElementById("toogle-kindness").value;
    const graditude = document.getElementById("toogle-graditude").value;
    const kindnessNote = document.getElementById("kindess-note")
      ? document.getElementById("kindess-note").value
      : "";
    const graditudeNote = document.getElementById("graditude-note")
      ? document.getElementById("graditude-note").value
      : "";
    let exerciseLevel;
    // assign exercise level from the radio buttons

    const radios = document.getElementsByName("exercise-radio-btns");
    console.log("RADIO--->", radios);
    for (var radio of radios) {
      if (radio.checked) {
        exerciseLevel = radio.value;
        console.log("radio-->", radio.value);
      }
    }

    const object = {
      happyScore: happyScore,
      sleepHours: sleepHours,
      exercise: exercise,
      exerciseLevel: exerciseLevel,
      kindness: kindness,
      kindnessNote: kindnessNote,
      graditude: graditude,
      gratitudeNote: graditudeNote,
    };
    console.log("OBJECT-->", object);
    utils.addRecord(object);
    history.push('/submitted')
  };

  return (
    <div className="col m-10">
      <form
        className="needs-validation"
        id="happyForm"
        onSubmit={onSubmit}
        novalidate
      >
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                {expanded ? (
                  <i class="far fa-minus-square fa-3x" onClick={onClick}></i>
                ) : (
                  <i class="far fa-plus-square fa-3x " onClick={onClick}></i>
                )}
              </li>
            </ul>
            {addRecord ? <AddRecordForm /> : <h1></h1>}
          </div>
        </div>
      </form>
    </div>
  );
}
