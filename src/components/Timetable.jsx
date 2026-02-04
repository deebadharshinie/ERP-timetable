import React from "react";
import timetableData from "../data/timetableData";
import "./Timetable.css";

const Timetable = () => {
  return (
    <div className="timetable-container">
      <h1>Student Timetable</h1>

      {Object.keys(timetableData).map((day) => (
        <div key={day}>
          <h2>{day}</h2>

          <div className="day-row">
            {timetableData[day].map((period, index) => (
              <div key={index} className={`card ${period.type}`}>
                <p className="time">{period.time}</p>
                <h3>{period.subject}</h3>

                {period.staff && <p>{period.staff}</p>}
                {period.room && <p>{period.room}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timetable;
