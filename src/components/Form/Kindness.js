import React, {useEffect,useState} from "react";
import KindnessNote from "./KindnessNote";
export default function Kindness() {
    const [kindnessToogle,setKindnessToogle] = useState(false)

    useEffect(()=>{
        document.getElementById("toogle-kindness").value=false
    },[])

    const onToogle = ()=> {
      document.getElementById("toogle-kindness").value=true
      setKindnessToogle(!kindnessToogle)
    }
  return (
    <div className="">
      <div className="row g-3">
        <hr className="mt-5 me-5" />
        <div className="form-check form-switch col-2">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={onToogle}
            id="toogle-kindness"
          />
          <label className="form-check-label" htmlFor="toogle-kindness">
            Random Kindenss
          </label>
        </div>
        {/* Textbox*/}
        {kindnessToogle ? <KindnessNote/> : <div></div>}
        

      </div>
    </div>
  );
}
