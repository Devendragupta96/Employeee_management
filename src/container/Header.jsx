import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#1e3b63",
          color: "white",
          padding: "30px",
        }}
      >
        Employee Management Software
      </h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)} className="round-button">
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;
