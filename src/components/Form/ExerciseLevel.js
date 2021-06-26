import React from 'react'

export default function ExerciseLevel() {
    return (
        <div class="col-10">
        <label class="form-check-label me-3" >Exercise Level</label>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exercise-radio-btns" id="low-radio" value="low"/>
        <label class="form-check-label" htmlFor="low">Low</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exercise-radio-btns" id="med-radio" value="med"/>
        <label class="form-check-label" htmlFor="med">Med</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="exercise-radio-btns" id="high-radio" value="high"/>
        <label class="form-check-label" htmlFor="high">High</label>
      </div>
    </div>
    )
}
