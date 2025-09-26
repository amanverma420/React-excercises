import React from "react";
import { useState } from "react";

function FormComp() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [result, setResult] = useState("");

  function handlefname(evt) {
    setfname(evt.target.value);
  }

  function handlelname(evt) {
    setlname(evt.target.value);
  }

  function handleResult(evt) {
    evt.preventDefault();
    setResult(`${fname} ${lname}`);
  }

  return (
    <>
      <form onSubmit={handleResult}>
        <input
          type="text"
          value={fname}
          onChange={handlefname}
          placeholder="First Name"
        />

        <br/>
        <input
          type="text"
          value={lname}
          onChange={handlelname}
          placeholder="Last Name"
        />

        <br/>
        <input type="submit" value="Submit" />
      </form>
      <h1>{result}</h1>
    </>
  );
}

export default FormComp;
