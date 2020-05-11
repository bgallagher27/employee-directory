import React from "react";
import Sort from "../Sort";
import Filter from "../Filter";
import "./style.css";

function Title(props) {
    return (
        <div className>
            <div className="row">
                <h1 className="title col jumbotron">{ props.children }</h1>
            </div>
            <div className="row">
                <div className="sort col">
                    <Sort />
                </div>
            </div>
            <div className="row">
                <div className="filter col">
                    <Filter />
                </div>
            </div>
        </div>
    )
};

export default Title;