import React, { useReducer } from "react";
import HappyContext from "./happyContext";
import HappyReducer from "./happyReducer";
import { SET_HAPPY_RECORDS } from "./actions";

function HappyState(props) {
  // set the inital state for all vars in the state
  const initalState = {
    happyRecords: [],
    
  };

  // set up state and dispatch vars for the reducuer
  const [state, dispatch] = useReducer(HappyReducer, initalState);

  // FUNCTIONS HERE

  //get the restuls from a user search
  const setHappyRecords = (results) => {
    dispatch({
      type: SET_HAPPY_RECORDS,
      payload: results,
    });
  };

  return (
    <HappyContext.Provider
      value={{
        // reutrn state values or functions listed here
        happyRecords: state.happyRecords,
       
      }}
    >
      {props.children}
    </HappyContext.Provider>
  ); // end of the return block
} // end of SoundtrackState

export default HappyState;
