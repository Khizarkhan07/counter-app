import React from 'react';
import Counter from "./counter";
function Counters(props){

    const {onDecrement, onIncrement, onDelete, onRest, counters} = props
    return (
        <div>
            <button onClick={onRest} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter=>
                <Counter
                    key={counter.id}
                    counter={counter}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
            )}
        </div>
    );

}

export default Counters;