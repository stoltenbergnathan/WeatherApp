# Weather App

## Introduction

> This was my first ever project on Github. Before creating this application I had to learn HTML, Javascript, React, and how to call API. This application will return the weather for the location entered. 

## Code Samples

> WeatherData

```
class WeatherData extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      city: "",
      windSpeed: "",
      temp: "",
      weather: "",
      lat: "", 
      lon: ""
    }
  }
  
  componentDidMount()
  {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&units=imperial&appid=9549ab31a5aeb4f443ac08a4b36c968f`
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({city: resp.name})
        this.setState({windSpeed: resp.wind.speed})
        this.setState({temp: resp.main.temp})
        this.setState({weather: resp.weather[0].description})
        this.setState({lat: resp.coord.lat})
        this.setState({lon: resp.coord.lon})
        console.log(resp)
      })
      .catch(()=>{
        console.log("WRONG")
      })
  }


  render()
  {
    return(
      <div className='weather'>
        <h1>Weather in {this.state.city}</h1>
        <p>Wind speed is {this.state.windSpeed} mph</p>
        <p>The tempature is {this.state.temp} degrees F</p>
        <p>{this.state.weather}</p>
        <p>lat: {this.state.lat} lon: {this.state.lon}</p>
        <LocationMap maplat={this.state.lat} maplon={this.state.lon}/>
      </div>
    )
  }
}
```

## Installation

> Once installed just type npm start to run the application
