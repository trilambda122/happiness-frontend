import React from 'react'

export default function ExerciseLevel() {
    return (
        <div className="row">
          <div className="col-5">
          <label className="form-check-label mt-3 me-3" >Level</label>
      <div className="form-check form-check-inline">
      
        <input className="form-check-input " type="radio" name="exercise-radio-btns" id="low-radio" value="low"/>
        <label className="form-check-label" htmlFor="low">Low</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="exercise-radio-btns" id="med-radio" value="med"/>
        <label className="form-check-label" htmlFor="med">Med</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="exercise-radio-btns" id="high-radio" value="high"/>
        <label className="form-check-label" htmlFor="high">High</label>
      </div>
          </div>
    </div>
    )
}
