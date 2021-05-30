import {SET_HAPPY_RECORDS} from './actions'
  
  const happyReducer =(state,action)=>{
   
    switch (action.type){
      
      case SET_HAPPY_RECORDS:
        console.log('payload ', action.payload)
      return {
        ...state,
        happyRecords: action.payload
      }   
      default:
          return state
    }
  }
  
  export default happyReducer
  