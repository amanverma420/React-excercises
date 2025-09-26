import { useState, useEffect } from "react";

// Sub-component to demonstrate mounting and unmounting
function CounterComponent() {
    useEffect(() => {
        console.log("CounterComponent MOUNTED");
        return () => {
            console.log("CounterComponent UNMOUNTED");
        };
    }, []);

    return <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>Counter Component is rendered!</div>;
}

function Add() {
    const [count, setCount] = useState(0);
    const [showComponent, setShowComponent] = useState(true);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [inputValue, setInputValue] = useState("");

    // useEffect for the main component mount/unmount
    useEffect(() => {
        console.log("Main Add component mounted");
        return () => {
            console.log("Main Add component unmounted");
        };
    }, []);

    // useEffect for count changes
    useEffect(() => {
        console.log("Count changed to:", count);
        document.title = `Count: ${count}`; // Side effect: update document title
    }, [count]);

    // useEffect for timer (runs when isTimerRunning changes)
    useEffect(() => {
        let interval;
        if (isTimerRunning) {
            console.log("Timer started");
            interval = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        } else {
            console.log("Timer stopped");
        }
        return () => {
            if (interval) {
                clearInterval(interval);
                console.log("Timer cleanup: interval cleared");
            }
        };
    }, [isTimerRunning]); // Dependency on isTimerRunning

    // useEffect for input value changes
    useEffect(() => {
        console.log("Input value changed to:", inputValue);
    }, [inputValue]);

    // useEffect for window resize (demonstrates event listeners with cleanup)
    useEffect(() => {
        const handleResize = () => {
            console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("Resize event listener removed");
        };
    }, []); // Empty deps: only on mount

    // Example: useEffect for fetching data (simulated)
    useEffect(() => {
        console.log("Fetching data...");
        // Simulate API call
        const fetchData = async () => {
            // In real app: const response = await fetch('/api/data');
            setTimeout(() => {
                console.log("Data fetched successfully");
            }, 1000);
        };
        fetchData();
    }, []); // Runs once on mount

    // Example: useEffect for localStorage (save count on change)
    useEffect(() => {
        localStorage.setItem('savedCount', count.toString());
        console.log("Count saved to localStorage:", count);
    }, [count]); // Runs when count changes

    // Example: useEffect for focus management
    useEffect(() => {
        // Focus the input when component mounts
        const input = document.querySelector('input');
        if (input) input.focus();
        console.log("Input focused on mount");
    }, []); // Runs once on mount

    function handleAdd() {
        setCount(count + 1);
    }

    function handleRemoveAdd() {
        setShowComponent(!showComponent);
    }

    function handleToggleTimer() {
        setIsTimerRunning(!isTimerRunning);
    }

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleAdd}>Add (increment count)</button>
            <button onClick={handleToggleTimer}>
                {isTimerRunning ? "Stop Timer" : "Start Timer"}
            </button>
            <button onClick={handleRemoveAdd}>
                {showComponent ? "Remove Component" : "Add Component"}
            </button>
            <br />
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type something..."
            />
            {showComponent && <CounterComponent />}
        </>
    );
}

export default Add;
