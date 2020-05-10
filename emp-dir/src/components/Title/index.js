import React from "react";

function Title(props) {
    return <h1 className="title col jumbotron">{ props.children }</h1>
}

export default Title;