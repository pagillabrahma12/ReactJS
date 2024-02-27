import { Component } from "react";



class MyBrahma extends Component {
  constructor() {
    super();
    this.state = {
      name: "rajesh",
      salary: 10000,
    };
  }
  HandlerIncrementSalary = () => {
    this.setState(
      {
        salary: this.state.salary + 500,
      },
    //  () => {}
    );
  };
  HandlerDecrementSalary=()=> {
    this.setState(
      {
        salary:this.state.salary -500,
      },
    //  ()=>{}
    )
  }

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <h2>
          {this.state.name}
          {this.state.salary}
        </h2>
        <button onClick={this.HandlerIncrementSalary}>
          Update Salary By 500
        </button>
        <button onClick={this.HandlerDecrementSalary}>
          Update Salary By 500
        </button>
      </>
    );
  }
}

export default MyBrahma;
