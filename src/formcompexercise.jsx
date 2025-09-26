import React from "react";
import { useState } from "react";

function FormCompexercise() {
  const [fnum, setfnum] = useState("");
  const [snum, setsnum] = useState("");
  const [result, setResult] = useState("");

  function handlefnum(evt) {
    setfnum(evt.target.value);
  }

  function handlesnum(evt) {
    setsnum(evt.target.value);
  }

  function handleResult(evt) {
    evt.preventDefault();
    const num1 = parseFloat(fnum) || 0;
    const num2 = parseFloat(snum) || 0;
    const sum = num1 + num2;
    setResult(`${fnum} + ${snum} = ${sum}`);
  }

  return (
    <>
      <form onSubmit={handleResult}>
        <input
          type="number"
          value={fnum}
          onChange={handlefnum}
          placeholder="First Number"
        />

        <br/>
        <input
          type="number"
          value={snum}
          onChange={handlesnum}
          placeholder="Second Number"
        />

        <br/>
        <input type="submit" value="Calculate Sum" />
      </form>
      <h1>{result}</h1>
    </>
  );
}

export default FormCompexercise;
