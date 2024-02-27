import { Component } from "react";


class MyYoutube extends Component{

    constructor() {
        super();
        this.state = {
          isSubscribe: false,
        };
      }
      HandlerButton = () => {
        this.setState({
          isSubscribe: !this.state.isSubscribe
        })
        
      };
      render() {
        return (
          <div>
            <button onClick={this.HandlerButton}>
              {this.state.isSubscribe ? "Unsubscribe" : "Subscribe"}
            </button>
          </div>
        );
      }
    }
    export default MyYoutube;
    
