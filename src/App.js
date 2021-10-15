import logo from './logo.svg'
import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ""
    }

  }
  componentDidMount() {
    fetch('https://api.github.com/emojis')
    .then(response => {
      response.json().then(data => {
        this.setState({ items: data})

      })
    })
  }

  render() {
    return (
      <div>
        <h1>Emojis</h1>
        {Object.entries(this.state.items).map(([key, value]) =>
            <img src={value} alt="" />
        )}
      </div>
    )
  }
}

export default App;