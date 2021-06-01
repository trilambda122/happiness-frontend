import React from 'react'

export default function AddRecord() {
    return (
        <div className="col m-5">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
              <img src="./images/plus.svg" alt="Bootstrap" width="48" height="48" class="rounded-circle border border-white bg-light"/>
              <span class="badge bg-primary m-2 bg-dark"></span>
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <img src="./images/thankful-hands.svg" alt="Bootstrap" width="48" height="48" class="rounded-circle border border-white bg-light"/>
                <span class="badge bg-primary"></span>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <small>5d</small>
              </li>
            </ul>
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></h2>
            <hr/>
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"></h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
              <span class="badge bg-dark">Happy Score: </span>

              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <span class="badge bg-dark">Sleep Hours: </span>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"></svg>
                <small>5d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}
