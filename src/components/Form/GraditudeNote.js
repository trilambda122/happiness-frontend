import React from "react";

export default function GraditudeNote() {
  return (
    <div className="text-start">
      <label >Please type your note</label>
      {/* <span class="btn btn-primary input-group-text">Enter Graditude</span> */}
      <textarea
        className="form-control "
        id="graditude-note"
        name="graditude-note"
        form="happyForm"
      ></textarea>
    </div>
  );
}
