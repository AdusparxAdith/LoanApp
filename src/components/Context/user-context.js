import React, { createContext } from "react";
import axios from "axios";

//Creating context of available global states
const UserContext = createContext({
  loanValue: 0,
  durationValue: 0,
  result: null,
  updateLoanValue: () => {},
  updateDurationValue: () => {}
});

export class UserProvider extends React.Component {
  /* Functions to update state of current loan value
  @param  {[number]} newloanValue [value of current inputed loan amount] 
  */
  updateLoanValue = newloanValue => {
    this.setState({ loanValue: newloanValue });
    this.makeApiCall(this.state.durationValue, newloanValue);
  };
  /* Function to update state of current duration value
  @param  {[number]} newdurationValue [value of current inputed loan amount] 
  */
  updateDurationValue = newdurationValue => {
    this.setState({ durationValue: newdurationValue });
    this.makeApiCall(newdurationValue, this.state.loanValue);
  };

  //Fetch data to be display from API call
  makeApiCall = async (durationParam, loanParam) => {
    let res = await axios.get(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${loanParam}&numMonths=${durationParam}`
    );

    this.setState({ result: res.data });
  };

  //State variables
  state = {
    loanValue: 500,
    updateLoanValue: this.updateLoanValue,
    durationValue: 6,
    result: {},
    updateDurationValue: this.updateDurationValue
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

//Registering a consumer who can access the global state
export const UserConsumer = UserContext.Consumer;
