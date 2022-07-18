import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {setCountry: countryAndCapitalsList[0].country}

  changeCapital = event => {
    //  console.log(event.target.value)
    const countryList = countryAndCapitalsList.filter(
      eachItem => eachItem.id === event.target.value,
    )
    console.log(countryList[0].country)

    this.setState({setCountry: countryList[0].country})
  }

  render() {
    const {setCountry} = this.state

    return (
      <div className="app-container">
        <div className="capital-city-container">
          <h1>Countries and Capitals</h1>
          <div>
            <select
              name="country"
              id="country"
              className="selectElement"
              onChange={this.changeCapital}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>

            <label htmlFor="country">is capital of which country? </label>
          </div>
          <p className="country-name">{setCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
