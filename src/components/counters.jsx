import React, {Component} from 'react';
import Counter from "./counter";
class Counters extends Component {
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
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter=>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                    />
                )}
            </div>
        );
    }
}

export default Counters;