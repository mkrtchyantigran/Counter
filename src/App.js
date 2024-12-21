
import "./App.css";



const { Component } = require("react");


 export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1 
    }
  }

  setPlus = () => this.setState(state => ({ count: state.count + 1 }))

  setMinus = () =>  this.setState(state => ({ count: state.count -1 }))
  
  render() {
    return (
      
      <div className="counter">
        <h1>{this.state.count}</h1>
        <div className="controls">
          <button onClick={this.setMinus}> 
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="50" height="50"fill="white" >
              <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm5.26-12.854l.707,.707-4.877,4.877c-.301,.3-.696,.45-1.091,.45s-.79-.149-1.091-.45l-4.872-4.873,.707-.707,4.872,4.873c.211,.211,.557,.211,.768,0l4.877-4.877Z"/>
            </svg>
          </button>
          <button onClick={this.setPlus}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="white" >
              <path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm5.967,12.146l-4.877-4.877c-.601-.601-1.579-.601-2.182,0l-4.872,4.873,.707,.707,4.872-4.873c.211-.211,.557-.211,.768,0l4.877,4.877,.707-.707Z"/>
            </svg>
          </button>
        </div>
        
      </div>
    )
  }
}