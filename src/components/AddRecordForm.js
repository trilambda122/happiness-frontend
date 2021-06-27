import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RangeBars from "./Form/RangeBars";
import Exercise from "./Form/Exercise";
import Kindness from "./Form/Kindness";
import Graditude from "./Form/Graditude";
export default function AddRecordForm() {
  
  return (
    <div>
      <RangeBars />
      <Exercise />
      <Kindness/>
    <Graditude/>
      <hr className="my-4" />
      <button className=" col-sm-4  btn btn-primary btn-lg" type="submit">
        Submit
      </button>
    </div>
  );
}
