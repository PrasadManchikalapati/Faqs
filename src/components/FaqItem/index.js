import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {stage: false}

  takeAction = () => {
    this.setState(prev => ({stage: !prev.stage}))
  }

  apply = () => {
    const {stage} = this.state
    const {details} = this.props
    const {answerText} = details

    if (stage) {
      return (
        <div className="additional-content">
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {stage} = this.state
    const {details} = this.props
    const {questionText} = details
    const imgIcon = stage
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    return (
      <>
        <li className="FaqItem">
          <div className="each-item">
            <h1>{questionText}</h1>
            <button type="button" onClick={this.takeAction}>
              <img src={imgIcon} alt={stage ? 'minus' : 'plus'} />
            </button>
          </div>
          {this.apply()}
        </li>
      </>
    )
  }
}

export default FaqItem
