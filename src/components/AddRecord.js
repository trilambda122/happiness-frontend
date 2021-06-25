import React, { useState } from "react";
import AddRecordForm from './AddRecordForm'

export default function AddRecord() {

  const [addRecord, setAddRecord] = useState(false);
const onClick = () => {
  setAddRecord(true)
}
    return (
        <div className="col m-5">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
              <img onClick={onClick} src="./images/plus.svg"  alt="Bootstrap" width="48" height="48" class="rounded-circle border border-white bg-light"/>
              </li>
            </ul>
            {addRecord ?  <AddRecordForm/>: <h1></h1>}
          </div>
        </div>
      </div>
    )
}
