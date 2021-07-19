import React, { useEffect, useState } from "react";
import api from "../utils/api";
import HappyCard from "../components/HappyCard";
import AddRecord from "../components/AddRecord";
// import HappyContext from '../context/happyContext'

// import SoundtrackContext from '../context/soundtrackContext'
// const {setSearchResultsFromAPI} = useContext(SoundtrackContext)

// let email = '';
// if (localStorage && localStorage.getItem('email')) {
//    email = JSON.parse(localStorage.getItem('email'));
//   }
//  this.setState({email: email})
// }
export default function Dashboard() {
  // SET STATE VARS
  const [happyRecords, sethappyRecords] = useState();
  const [happyPhotos, setHappyPhotos] = useState();
  const [sadPhotos, setSadPhotos] = useState();
  const [greyPhotos, setGreyPhotos] = useState();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user,setUser] = useState('')
  useEffect(async () => {
    let email = ''
    if (localStorage && localStorage.getItem('email')) {
      email = JSON.parse(localStorage.getItem('email'))
    }
    let userId=''
    if (localStorage && localStorage.getItem('userId')) {
      userId = JSON.parse(localStorage.getItem('userId'))
    }
    setUser(email)
    // Update the document title using the browser API
    setLoading(true);
    // get all the records from database
    api
      .getAllHappies(userId)
      .then((response) => {
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

  return (
    <div>
      <h1>FEED</h1>
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
              user={user}
            ></HappyCard>
          );
        })
      )}
    </div>
  );
}
