import React, { useState } from 'react';

function Counter() {
    // Initialize the count state to 0 using the useState hook
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    };

    // Function to decrement the count
    const decrement = () => {
        setCount(count - 1);
    };

    // Function to reset the count to 0
    const reset = () => {
        setCount(0);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Counter Application</h2>
            <p>Current Count: {count}</p> {/* Displaying the current count */}
            <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
            <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
            <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
        </div>
    );
}
export default Counter;


