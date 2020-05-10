import React from "react";
import "./style.css";

function Wrapper(props) {
    return <div className="wrapper container">
               <div className="col-sm-10 col-md-9">{ props.children }</div>
           </div>;
}

export default Wrapper;