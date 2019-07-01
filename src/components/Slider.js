import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Slider = ({ range: { minValue, maxValue }, value, updateValue }) => {
  const handleChange = (updateValue, event) => {
    updateValue(parseInt(event.target.value));
    console.log(event.target.value);
  };

  return (
    <Fragment>
      <Fragment>
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={value}
          className="slider"
          id="myRange"
          onChange={event => handleChange(updateValue, event)}
        />
      </Fragment>
      <p>{value}</p>
    </Fragment>
  );
};

Slider.propTypes = {
  range: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired
};

export default Slider;
