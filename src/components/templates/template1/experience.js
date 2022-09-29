import React from 'react'

export default function experience(props) {
  return (
   <>
    <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">{props.jobtitle}</h3>
                    <div className="time">{props.startdate} - {props.enddate}</div>
              </div>
              <div className="company">{props.company}</div>
            </div>
            <div className="details">
              <p>{props.desc}</p>  
            </div>
          </div>
   </>
  )
}
