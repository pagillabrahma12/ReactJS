import { Component } from "react";



class Mycomponent extends Component{

    constructor() {
        super();
        this.state = {
          name: "Srikanth",
          age: 23,
        };
      }
    
      handlerAgeIncrement = () => {
        this.setState(
          {
            age: this.state.age + 1,
          },
          () => {}
        );
      };
      handlerAgeDecrement = () => {
        this.setState(
          {
            age: this.state.age - 1,
          },
          () => {}
        );
      };
      render() {
        return (
          <div>
            <h3>{this.state.age}</h3>
            <button onClick={this.handlerAgeIncrement}>+</button>
            <button onClick={this.handlerAgeDecrement}>-</button>
          </div>
        );
      }
    }

    export default Mycomponent;
    