import React, { useContext, useEffect, useState } from "react";
import api from "../utils/api";
import HappyCard from "../components/HappyCard";
import AddRecord from "../components/AddRecord";
// import HappyContext from '../context/happyContext'

// import SoundtrackContext from '../context/soundtrackContext'
// const {setSearchResultsFromAPI} = useContext(SoundtrackContext)
export default function Dashboard() {
  // SET STATE VARS
  const [happyRecords, sethappyRecords] = useState();
  const [happyPhotos, setHappyPhotos] = useState();
  const [sadPhotos, setSadPhotos] = useState();
  const [greyPhotos, setGreyPhotos] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    // Update the document title using the browser API
    setLoading(true);
    // get all the records from database
    api
      .getAllHappies()
      .then((response) => {
        console.log("this is the records ", response.data);
        sethappyRecords(response.data);

        // get Happy Photos
        api
          .getPhotos("bright")
          .then((response) => {
            setHappyPhotos(response.data.results);
            // get Sad Photos
            api
              .getPhotos("dark")
              .then((response) => {
                setSadPhotos(response.data.results);
                // get grey photos
                api
                  .getPhotos("grey")
                  .then((response) => {
                    setGreyPhotos(response.data.results);
                    setLoading(false);
                  })
                  .catch((error) => {
                    setHasError(true);
                    console.log(error);
                  });
              })
              .catch((error) => {
                setHasError(true);
                console.log(error);
              });
          })
          .catch((error) => {
            setHasError(true);
            console.log(error);
          });
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      });
  }, []);

  // const selectRandomPhoto = (photoArray) => {
  //   const index = Math.floor(Math.random() * (0 + photoArray.length - 1)) + 1;
  //   return photoArray[index].urls.regular;
  // };
  return (
    <div>
      <h1>DASHBOARD</h1>
      <AddRecord></AddRecord>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>ERROR!!</div>
      ) : (
        happyRecords &&
        happyRecords.happyItems.map((item) => {
          return (
            <HappyCard
              key={item._id}
              happyRecord={item}
              happyPhotos={happyPhotos}
              sadPhotos={sadPhotos}
              greyPhotos={greyPhotos}
            ></HappyCard>
          );
        })
      )}
    </div>
  );
}
