import React from "react";
import logo from "../../assets/logo_ry.png";
import "./Form.css";
function Form({ onSubmit, onChange, location }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <img src={logo} alt="The logo" className="logo" />
      <input
        type="text"
        className="search-input"
        value={location}
        onChange={onChange}
        placeholder="Enter location"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Form;
