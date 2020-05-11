import React from "react";

function Sort(props) {
    return (
        <div className="row">
            <p className="col-sm-8 col-md-6">Sort the Employees by name:</p>
            <button className="button btn btn-primary col-sm-3 col-md-2">Ascending Order</button>
            <button className="button btn btn-success col-sm-3 col-md-2">Descending Order</button>
        </div>
    )
}

export default Sort;