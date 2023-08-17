import React, { useState } from "react";

export default function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState("");

  const calculateTotal = () => {
    if (!number1 || !number2) {
      window.alert("Please fill in number");
    } else {
      const sum = parseFloat(number1) + parseFloat(number2);
      setTotal(sum);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "80%",
        margin: "auto",
      }}
    >
      <h1> Adding Two Numbers</h1>

      <input
        style={{ width: "10rem", height: "2rem", marginBottom: ".5rem" }}
        type="number"
        name="number1"
        id="number1"
        placeholder="First Number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />

      <input
        style={{ width: "10rem", height: "2rem", marginBottom: "1rem" }}
        type="number"
        name="number2"
        id="number2"
        placeholder="Second Number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />

      <button
        style={{
          width: "10rem",
          height: "2rem",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
        onClick={calculateTotal}
      >
        Add Two Numbers
      </button>

      <label style={{ fontWeight: "bold" }}>Total: {total}</label>
    </div>
  );
}

