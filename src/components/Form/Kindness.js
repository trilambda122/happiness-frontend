import React, {useEffect,useState} from "react";
import KindnessNote from "./KindnessNote";
export default function Kindness() {
    const [kindnessToogle,setKindnessToogle] = useState(false)

    useEffect(()=>{
        document.getElementById("toogle-kindness").value=false
    },[])

    const onToogle = ()=> setKindnessToogle(!kindnessToogle)
  return (
    <div className="container">
      <div className="row g-3">
        <hr className="mt-5 me-5" />
        <div class="form-check form-switch col-2">
          <input
            class="form-check-input"
            type="checkbox"
            onChange={onToogle}
            id="toogle-kindness"
          />
          <label class="form-check-label" htmlFor="toogle-kindness">
            Random Kindenss
          </label>
        </div>
        {/* Textbox*/}
        {kindnessToogle ? <KindnessNote/> : <div></div>}
        

      </div>
    </div>
  );
}
