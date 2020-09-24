import React from 'react';
import Navbar from "./components/navbar";
import './App.css';
import Counters  from "./components/counters";

class App extends React.Component{
  state = {
    counters : [
      {id:1, value: 4},
      {id:2, value: 0},
      {id:3, value: 0},
      {id:4, value: 0},
    ]
  }
  handleIncrement =  (counter) => {

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]= {...counter};
    counters[index].value++;
    this.setState({counters:counters})

  }

  handleDecrement =  (counter) => {

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]= {...counter};
    if(counters[index].value !== 0){
      counters[index].value--;
      this.setState({counters:counters})
    }


  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    })
    this.setState({counters:counters})
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({counters: counters})
  }

  render() {
    return (
        <div>
          <Navbar totalCounter = {this.state.counters.filter(c=> c.value>0).length}/>
          <main className={"container"}>
            <Counters
                onRest={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                counters = {this.state.counters}
            />
          </main>
        </div>

    );
  }


}

export default App;
