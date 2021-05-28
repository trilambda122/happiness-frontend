import React, { useReducer } from "react";
import HappyContext from "./happyContext";
import HappyReducer from "./happyReducer";
import { SEARCH_RESULTS } from "./actions";

function HappyState(props) {
  // set the inital state for all vars in the state
  const initalState = {
    searchResults: [],
    
  };

  // set up state and dispatch vars for the reducuer
  const [state, dispatch] = useReducer(HappyReducer, initalState);

  // FUNCTIONS HERE

  //get the restuls from a user search
  const setSearchResultsFromAPI = (results) => {
    dispatch({
      type: SEARCH_RESULTS,
      payload: results,
    });
  };

  return (
    <HappyContext.Provider
      value={{
        // reutrn state values or functions listed here
        searchResults: state.searchResults,
       
      }}
    >
      {props.children}
    </HappyContext.Provider>
  ); // end of the return block
} // end of SoundtrackState

export default HappyState;
