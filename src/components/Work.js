import "./Workcardstyle.css"
import Workcard from "./Workcard"
import WorkcardData from "./WorkcardData"



import React from 'react'


const Work = () => {
  return (
    <div className="work-container">
        <div className="project-heading">
            <div className="project-container">
                {WorkcardData.map((val, ind) =>{
                  return(
                    <Workcard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.View}
                    />
                  )
                })}
            </div>
        </div>
    </div>
  )
}

export default Work