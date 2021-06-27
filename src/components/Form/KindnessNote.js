import React from "react";

export default function KindnessNote() {
  return (
    <div className="text-start">
      <label >Please type your note</label>
      <textarea
        class="form-control "
        id="kindess-note"
        name="kindess-note"
        form="happyForm"
      ></textarea>
    </div>
  );
}
