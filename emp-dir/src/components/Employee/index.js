import React from "react";
import "./style.css";

function Employee(props) {
    return (
      <div className="row">
        <div className="col">
          <div className="card col">
            <div className="img-container">
              <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {props.name}
                </li>
                <li>
                  <strong>Role:</strong> {props.role}
                </li>
                <li>
                  <strong>Salary:</strong> {props.salary}
                </li>
              </ul>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }

  export default Employee;