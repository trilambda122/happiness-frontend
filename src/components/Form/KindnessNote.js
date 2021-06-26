import React from "react";

export default function KindnessNote() {
  return (
    <div class=" input-group">
      <span class="btn btn-primary input-group-text">Enter Kindness</span>
      <textarea
        class="form-control "
        id="kindess-note"
        name="kindess-note"
        form="happyForm"
      ></textarea>
    </div>
  );
}
