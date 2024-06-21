import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <ul>
          <h1 style={{color: '#cb8805', textAlign: 'center'}}>FAQs</h1>
          <div>
            {faqsList.map(each => (
              <FaqItem details={each} key={each.id} />
            ))}
          </div>
        </ul>
      </div>
    )
  }
}
export default Faqs
