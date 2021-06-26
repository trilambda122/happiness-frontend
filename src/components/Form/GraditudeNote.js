import React from "react";

export default function GraditudeNote() {
  return (
    <div class=" input-group">
      <span class="btn btn-primary input-group-text">Enter Graditude</span>
      <textarea
        class="form-control "
        id="graditude-note"
        name="graditude-note"
        form="happyForm"
      ></textarea>
    </div>
  );
}
