import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Slider = ({ range: { minValue, maxValue }, value, updateValue }) => {
  let realValue = value;
  //To handle null
  if (isNaN(realValue)) realValue = 0;

  /* Update state on change of input
   @param  {[event]} event [change in input] */
  const handleChange = event => {
    updateValue(parseInt(event.target.value));
  };

  return (
    <Fragment>
      <div className="inputSection">
        <div className="indicators">
          <div>{minValue}</div>
          <div>{maxValue}</div>
        </div>
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={realValue}
          className="slider"
          id="myRange"
          onChange={event => handleChange(event)}
        />
        <input
          className="inputBox"
          value={realValue}
          onChange={event => handleChange(event)}
        />
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
