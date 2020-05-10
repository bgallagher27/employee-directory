import React from "react";

function Sort(props) {
    return (
        <div className="row">
            <p>Sort the Employees by name:</p>
            <button className="button primary">Ascending Order</button>
            <button className="button secondary">Descending Order</button>
        </div>
    )
}

export default Sort;