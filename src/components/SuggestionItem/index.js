// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, displayText} = props

  const clickButton = () => {
    displayText(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestion-name">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={clickButton}
      />
    </li>
  )
}

export default SuggestionItem
