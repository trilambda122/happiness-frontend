import React, {useEffect,useState} from "react";
import ExerciseLevel from "./ExerciseLevel";


export default function Exercise() {
    const [exerciseToogle, setExerciseToogle] = useState(false);


    useEffect(() => {
        document.getElementById("toogle-exercise").value=false
       },[]);

       const onToogle = ()=> {
        document.getElementById("toogle-exercise").value=true
        setExerciseToogle(!exerciseToogle)
       }

  return (
    <div className="text-start">
      <div className="row g-3">
      <hr className="mt-5"/>
            <div className="form-check form-switch col-4">
              <input className="form-check-input" type="checkbox" onChange={onToogle} id="toogle-exercise"/>
              <label className="form-check-label" htmlFor="toogle-exercise">Exercise</label>
            </div>
            {/* low med high exercise level checkboxes */}
          
            {exerciseToogle ?  <ExerciseLevel/> : <div></div>}
      </div>
    </div>
  );
}
