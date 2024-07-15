// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  userSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  displayText = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )

    return (
      <div className="page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="image"
        />
        <div className="search-card">
          <div className="input-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              className="input-element"
              placeholder="search google"
              onChange={this.userSearch}
              value={searchInput}
            />
          </div>
          <ul className="list-item">
            {searchResults.map(eachItem => (
              <SuggestionItem
                {...eachItem}
                key={eachItem.id}
                displayText={this.displayText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
