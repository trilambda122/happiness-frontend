import React from "react";

export default function AddRecordForm() {

   
    const rangeBarmove = ()=>{
        console.log('moving the bar')
        const barValue=document.getElementById('sleep-hours').value
        console.log(document.getElementById('sleep-hours').value)
        document.getElementById('sleep-hour-value').innerHTML = barValue
    }
  return (
    <div>
      <form className="needs-validation" id="happyForm" novalidate>
        <div className="row g-3">
          <div className="col-sm-6">
            <label for="happyScore" className="form-label">
              Happy Score
            </label>
            <select
              className="form-select"
              id="happyScore"
              aria-label="HappyScore"
            >
              <option selected>Happy Score</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="col-sm-6">
            <label for="sleep-hours" className="form-label">
              Sleep Hours
            </label>
            
            <input onChange={rangeBarmove}
              type="range"
              class="form-range"
              min="0"
              max="24"
              step="1"
              id="sleep-hours"
            
            ></input>
            <span id="sleep-hour-value" class="badge bg-secondary">0</span>
          </div>
          <hr className="my-4" />

          <div className="row g-3">
            <label for="happyNote" className="form-label">
              Kindness Note
            </label>
            <textarea name="happyNote" form="happyForm">
              Enter text here...
            </textarea>
          </div>

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
          <button className="w-50 btn btn-primary btn-lg" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
