import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.initialState = {
      method: '',
      text: '',
      sum:0
    }

    this.state = this.initialState
  }
handleNumberChange = (event) => {
  console.log(`change text`, event.target.value)
  this.setState({
    text: event.target.value
  })
}
handleSelectChange = (event) => {
  console.log(`change select`, event.target.value)
  this.setState({
    method: event.target.value
  })
}
handleFormSubmit = (event) => {
  event.preventDefault();
  const {text, method, sum } = this.state;
  let array = text.split(',')
  if(method === 'sum'){
    
  array.forEach((number) => { this.setState({
   sum : sum + parseInt(number) 
  })

  })

  }
console.log(sum)
}

  render() {
    console.log(this.state)
    const {method} = this.state;

    return (
      <div className="App">
        <p>Enter each number in the array, separated by a ','</p>

        <form onSubmit = {this.handleFormSubmit}>
          <input type='text'
            onChange={this.handleNumberChange}
          />
          <label htmlFor='title'>Title: </label>
          <select
            id='method'
            onChange={this.handleSelectChange}
            value={method}>
            <option value=""></option>
            <option value='sum'>sum</option>
            <option value='average'>average</option>
            <option value='mode'>mode</option>
          </select>
          <button
          onChange = {this.handleNumberChange}>Calculate</button>
        </form>
      </div >
    )
  }
}

export default App;