import React from "react";
import Sort from "../Sort";
import Filter from "../Filter";
import "./style.css";
import employees from "../../employees.json";
import Employee from "../Employee";

class Title extends React.Component {

    state = {
        employees
    };

    filterDirector = () => {
        const employees = this.state.employees.filter(employees => employees.role === "Director");
    this.setState({ employees });
    };

    render() {
    return (
        <div>
            <div className="row">
                <h1 className="title col jumbotron">{ this.props.children }</h1>
            </div>
            <div className="row">
                <div className="sort col">
                    <Sort />
                </div>
            </div>
            <div className="row">
                <div className="filter col">
                    <Filter filterDirector={this.filterDirector} />
                </div>
            </div>
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
        </div>
    )
    }
};

export default Title;