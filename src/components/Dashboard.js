import React, {useEffect } from 'react';




export default function Dashboard() {

    useEffect(() => {
        // Update the document title using the browser API
       console.log('USE EFFECT!')
      },[]);


    return (
        <div>
            <h1>DASHBAORD</h1>
        </div>
    )
}

