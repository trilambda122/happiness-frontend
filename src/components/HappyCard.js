import React from "react";

var backgoundStyle = {
    color: 'white',
    backgroundImage: 'url("./images/test-image.jpg")',
    
  };

export default function HappyCard(props) {
  console.log("THIS is a Prop ", props);
  return (
    <div className="col m-5">
      <div
        className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        style={backgoundStyle}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src="./images/exercise-icon.svg"
                alt="Bootstrap"
                width="48"
                height="48"
                class="rounded-circle border border-white bg-success"
              />
              <span class="badge bg-primary m-1 bg-dark"></span>
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em"></svg>
              <img
                src="./images/thankful-hands.svg"
                alt="Bootstrap"
                width="48"
                height="48"
                class="rounded-circle border border-white bg-light"
              />
            </li>
          </ul>
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            {props.happyRecord.kindnessNote}
          </h2>
          <hr />
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            {props.happyRecord.gratitudeNote}
          </h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <div>
                <img
                  src="./images/smile.svg"
                  alt="Bootstrap"
                  width="48"
                  height="48"
                  class="rounded-circle border border-white bg-light"
                />
                <span class="badge bg-dark">
                  {props.happyRecord.happyScore}
                </span>
              </div>
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em"></svg>
              <div>
                {" "}
                <img
                  src="./images/zzz.svg"
                  alt="Bootstrap"
                  width="48"
                  height="48"
                  class="rounded-circle border border-white bg-success"
                />
                <span class="badge bg-dark">
                  {props.happyRecord.sleepHours}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
