import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <div className="count-container">
          <h1 className="heading">
            The Button has been clicked <span className="counter">{count}</span>
            times
          </h1>
          <p className="description">Click the button to increase the count!</p>
          <div>
            <button className="button" onClick={this.onIncrement}>
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
