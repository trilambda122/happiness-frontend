import React from "react";

var backgoundStyle = {
  color: "white",
  backgroundImage: 'url("./images/test-image.jpg")',
};

export default function HappyCard(props) {
  const returnHappyIcon = () => {
    const score = props.happyRecord.happyScore;
    switch (true) {
      case score === 1:
        return "./images/faces/1-sad.svg";
      case score === 2:
        return "./images/faces/2-down.svg";
      case score === 3:
        return "./images/faces/3-meh.svg";
      case score === 4:
        return "./images/faces/4-smile.svg";
      case score === 5:
        return "./images/faces/5-happy.svg";
      default:
        return "none";
    }
  };

  const returnSleepColor = () => {
    const hours = props.happyRecord.sleepHours;
    switch (true) {
      case hours < 3:
        return "rounded-circle border border-white bg-danger";
      case hours <= 6:
        return "rounded-circle border border-white bg-warning";
      case hours >= 7:
        return "rounded-circle border border-white bg-success";
      default:
        return "rounded-circle border border-white";
    }
  };

  const returnExceriseColor = () => {
    const level = props.happyRecord.exerciseLevel;
    switch (true) {
      case (level === "low"):
        return "rounded-circle border border-white bg-danger";
      case (level === "med"):
        return "rounded-circle border border-white bg-warning";
      case (level === "high"):
        return "rounded-circle border border-white bg-success";
        case (level === "none"):
          return "rounded-circle border border-white bg-light";
      default:
        return "rounded-circle border border-white bg-primary";
    }
  };

  return (
    <div className="col m-5">
      <div
        className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        // style={backgoundStyle}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              {props.happyRecord.exercise && (
                <img
                  src="./images/exercise-icon.svg"
                  alt="Bootstrap"
                  width="48"
                  height="48"
                  className={returnExceriseColor()}
                />
              )}

              <span className="badge bg-primary m-1 bg-dark"></span>
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em"></svg>
              {props.happyRecord.kindness && (
                <img
                  src="./images/thankful-hands.svg"
                  alt="Bootstrap"
                  width="48"
                  height="48"
                  className="rounded-circle border border-white bg-light"
                />
              )}
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
                  src={returnHappyIcon()}
                  alt="Bootstrap"
                  width="48"
                  height="48"
                  className="rounded-circle border border-white bg-light"
                />
                <span className="badge bg-dark">
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
                  className={returnSleepColor()}
                />
                <span className="badge bg-dark">
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
