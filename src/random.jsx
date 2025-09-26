import { useState } from "react";

export default function RandomNumberGenerator() {
  // Step 1: Create state for the random number
  const [randomNumber, setRandomNumber] = useState(0);

  // Step 2: Function to generate a new random number
  const generateRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100); // 0 to 99
    setRandomNumber(newNumber);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Random Number Generator</h1>
      <h2>{randomNumber}</h2>

      {/* Step 3: Button to trigger random number generation */}
      <button onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
}
