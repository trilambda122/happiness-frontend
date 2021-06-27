import React, { useEffect, useState } from "react";
import GraditudeNote from "./GraditudeNote";
export default function Graditude() {
  const [graditudeToogle, setGraditudeToogle] = useState(false);

  useEffect(() => {
    document.getElementById("toogle-graditude").value = false;
  }, []);

  const onToogle = ()=> {
    document.getElementById("toogle-graditude").value=true
    setGraditudeToogle(!graditudeToogle)
  }

  return (
    <div className="">
      <div className="row g-3">
        <hr className="mt-5 me-5" />
        <div class="form-check form-switch col-2">
          <input
            class="form-check-input"
            type="checkbox"
            onChange={onToogle}
            id="toogle-graditude"
          />
          <label class="form-check-label" htmlFor="toogle-graditude">
            Graditude Note
          </label>
        </div>
           {/* Textbox*/}
           {graditudeToogle ? <GraditudeNote/> : <div></div>}
      </div>
    </div>
  );
}
