import React from "react";

function Title(props) {
    return (
        <div className="row">
            <h1 className="title col jumbotron">{ props.children }</h1>
            <div className="sort">
                <Sort />
            </div>
            <div className="filter">
                <Filter />
            </div>
        </div>
    )
};

export default Title;