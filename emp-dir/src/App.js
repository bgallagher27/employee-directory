import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Employee from "./components/Employee";
import employees from "./employees.json";

class App extends React.Component {
  state = {
    employees
  };

  render() {
    return (
    <div className="jumbotron">
      <Wrapper>
        <Title><a href="https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0">"Inception"</a> Employee Directory</Title>
        {this.state.employees.map(employees => (
          <Employee
            id={employees.id}
            key={employees.id}
            name={employees.name}
            image={employees.image}
            role={employees.role}
            salary={employees.salary}
          />
        ))}
      </Wrapper>
    </div>
  )};
};

export default App;
