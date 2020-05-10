import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

function App() {
  return (
    <div className="column jumbotron">
      <Wrapper>
        <Title><a href="https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0">"Inception"</a> Employee Directory</Title>
      </Wrapper>
    </div>
  );
}

export default App;
