import React, { useContext, useEffect, useState } from "react";
import api from "../utils/api";
import HappyCard from '../components/HappyCard'
// import HappyContext from '../context/happyContext'

// import SoundtrackContext from '../context/soundtrackContext'
// const {setSearchResultsFromAPI} = useContext(SoundtrackContext)
export default function Dashboard() {
//   const {setHappyRecords} = useContext(HappyContext)
  const [happyRecords, sethappyRecords] = useState();
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)
    useEffect(() => {
    // Update the document title using the browser API
    setLoading(true)
    api
      .getAllHappies()
      .then((response) => {
        console.log('this is the records ',response.data);
        sethappyRecords(response.data)
        setLoading(false)
      })
      .catch((error) => {
          setHasError(true)
        console.log(error);
      });
  }, []);


  
  return (
    <div>
      <h1>DASHBAORD</h1>
      { loading ? <div>Loading...</div> : hasError ? <div>ERROR!!</div> : happyRecords && happyRecords.happyItems.map((item)=>{
          return <HappyCard key={item._id} happyRecord={item}></HappyCard>
      })
      }
    </div>
  );
}
