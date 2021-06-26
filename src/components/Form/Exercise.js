import React, {useEffect,useState} from "react";
import ExerciseLevel from "./ExerciseLevel";


export default function Exercise() {
    const [exerciseToogle, setExerciseToogle] = useState(false);


    useEffect(() => {
        document.getElementById("toogle-exercise").value=false
       },[]);

       const onToogle = ()=> setExerciseToogle(!exerciseToogle)

  return (
    <div className="container">
      <div className="row g-3">
      <hr className="mt-5"/>
            <div class="form-check form-switch col-2">
              <input class="form-check-input" type="checkbox" onChange={onToogle} id="toogle-exercise"/>
              <label class="form-check-label" htmlFor="toogle-exercise">Exercise</label>
            </div>
            {/* low med high exercise level checkboxes */}
          
            {exerciseToogle ?  <ExerciseLevel/> : <div></div>}
           
  

      </div>
    </div>
  );
}
