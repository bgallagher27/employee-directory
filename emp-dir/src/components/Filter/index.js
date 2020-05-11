import React from "react";

function Filter(props) {
    return (
        <div className="row">
            <p className="col-sm-3 col-md-5">Filter Employees by role:</p>
            <button className="button btn btn-primary col-sm-3 col-md-2">Director</button>
            <button className="button btn btn-success col-sm-3 col-md-2">Actor</button>
            <button className="button btn btn-secondary col-sm-3 col-md-2">Actress</button>
        </div>
    )
}

export default Filter;