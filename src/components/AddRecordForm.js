import React from "react";

export default function addRecordForm() {
  return (
    <div>
      <form className="needs-validation" id="happyForm" novalidate>
        <div className="row g-3">
          <div className="col-sm-6">
          <label for="happyScore" className="form-label">Happy Score</label>
              <input type="text" className="form-control" id="happyScore" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid score is required.
              </div>
          </div>

          <div className="col-sm-6">
              <label for="sleepHours" className="form-label">Sleep Hours</label>
              <input type="text" className="form-control" id="sleepHours" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid hours is required.
              </div>
            </div>
            <hr className="my-4"/>

            <div className="row g-3">
            <label for="happyNote" className="form-label">Kindness Note</label>
            <textarea name="happyNote" form="happyForm">Enter text here...</textarea>
            </div>
         
            <hr className="my-4"/>
            <div className="row g-3">
              <label for="gratNote" className="form-label">Gratitude  Note</label>
              <textarea name="gratNote" form="happyForm">Enter text here...</textarea>
              </div>
          <hr className="my-4"/>
          <button class="w-50 btn btn-primary btn-lg" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
