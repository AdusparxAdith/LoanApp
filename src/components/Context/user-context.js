import React, { createContext } from "react";
import axios from "axios";

const UserContext = createContext({
  loanValue: 0,
  durationValue: 0,
  result: null,
  updateLoanValue: () => {},
  updateDurationValue: () => {}
});

export class UserProvider extends React.Component {
  updateLoanValue = newloanValue => {
    this.setState({ loanValue: newloanValue });
    this.makeApiCall(this.state.durationValue, newloanValue);
  };
  updateDurationValue = newdurationValue => {
    this.setState({ durationValue: newdurationValue });
    this.makeApiCall(newdurationValue, this.state.loanValue);
  };

  makeApiCall = async (durationParam, loanParam) => {
    let res = await axios.get(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${loanParam}&numMonths=${durationParam}`
    );

    this.setState({ result: res.data });
  };

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

export const UserConsumer = UserContext.Consumer;
