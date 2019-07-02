import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Slider = ({ range: { minValue, maxValue }, value, updateValue }) => {
  const handleChange = (updateValue, event) => {
    updateValue(parseInt(event.target.value));
  };

  return (
    <Fragment>
      <div className="inputSection">
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={value}
          className="slider"
          id="myRange"
          onChange={event => handleChange(updateValue, event)}
        />
        <p> {value}</p>
      </div>
    </Fragment>
  );
};

Slider.propTypes = {
  range: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  updateValue: PropTypes.func.isRequired
};

export default Slider;
