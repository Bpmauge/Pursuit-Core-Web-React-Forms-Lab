import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      method: '',
      input: '',
      result: ''
    };

    this.state = this.initialState
  };

  handleNumberChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };
  handleSelectChange = (event) => {
    this.setState({
      method: event.target.value
    });
  };

  handleFormSubmit = (event) => {
    const { input, method} = this.state;
    event.preventDefault();
    if (this.allFieldsValid()) {
      if (method === 'sum') {
        this.setState({
          result: this.addFunction(input)
        });
      } else if (method === 'average') {
        this.setState({
          result: this.averageFunction(input)
        });
      } else{//(method === 'mode') {
        this.setState({
          result: this.modeFunction(input)
        });
      // }
    }
    };
  };

  addFunction = (input) => {
    let array = input.split(',');
    let total = array.reduce((total, currentValue) => {
      return parseInt(total) + parseInt(currentValue);
    });
    return (total);
  };

  averageFunction = (input) => {
    let array = input.split(',');
    let total = array.reduce((total, currentValue) => {
      return parseInt(total) + parseInt(currentValue);
    });
    return (total / array.length);
  };

  modeFunction = (input) => {
    let array = input.split(',');
    let countObj = {};
    for (let num of array) {
      if (countObj[num] === undefined) {
        countObj[num] = 1;
      } else {
        countObj[num]++;
      };
    };
    let mostCommonNum = array[0];
    let mostCommonCount = countObj[mostCommonNum];
    for (let num in countObj) {
      if (countObj[num] > mostCommonCount) {
        mostCommonNum = num;
        mostCommonCount = countObj[num];
      };
    };
    return parseInt(mostCommonNum);
  };

  allFieldsValid = () => {
    return (
      this.state.input && this.state.method
    );
  };

  render() {
    const { method } = this.state;
    return (
      <div className="App">
        <p>Enter each number in the array, separated by a ','</p>

        <form onSubmit={this.handleFormSubmit}>
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
            onChange={this.handleNumberChange}>Calculate</button>
        </form>
      </div >
    );
  };
}

export default App;