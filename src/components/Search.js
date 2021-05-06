import React from 'react'
import WeatherData from './WeatherData'
import '../index.css'

class Search extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      city: "",
      weather: false
    }
    this.cityChange = this.cityChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)  
  }

  cityChange(event)
  {
    this.setState({city: event.target.value})
    this.setState({weather: false})
  }

  handleSubmit(event)
  {
    event.preventDefault();
    this.setState({weather: true})
  }

  componentDidMount()
  {
    this.setState({city: ""})
  }

  render()
  {
    if(!this.state.weather){
      return(
        <div className='search'>
          <form onSubmit={this.handleSubmit}>
            <label>City: </label>
            <input type="text" value={this.state.city} onChange={this.cityChange} />
          </form>
        </div>
      )
    }
    return(
      <div className='search'>
          <form onSubmit={this.handleSubmit}>
            <label>City: </label>
            <input type="text" value={this.state.city} onChange={this.cityChange} />
          </form>
          <WeatherData city={this.state.city}/>
      </div>
    )
  }
}

export default Search