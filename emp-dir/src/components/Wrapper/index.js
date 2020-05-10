import React from "react";

function Wrapper(props) {
    return <div className="wrapper row container">{ props.children }</div>;
}

export default Wrapper;