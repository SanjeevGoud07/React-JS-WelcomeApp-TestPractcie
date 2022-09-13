import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSub: true}

  onSub = () => {
    this.setState(prevState => {
      console.log(`Bye ${prevState}`)
      return {isSub: false}
    })
  }

  offSub = () => {
    this.setState(prevState => {
      console.log(`Hi ${prevState}`)
      return {isSub: true}
    })
  }

  render() {
    const {isSub} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {isSub ? (
          <button type="button" onClick={this.onSub}>
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.offSub}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
