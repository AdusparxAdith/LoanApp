import React, { createContext } from "react";

const UserContext = createContext({
  loanValue: 0,
  durationValue: 0,
  updateloanValue: () => {},
  updatedurationValue: () => {}
});

export class UserProvider extends React.Component {
  updateloanValue = newloanValue => {
    this.setState({ loanValue: newloanValue });
  };
  updatedurationValue = newdurationValue => {
    this.setState({ durationValue: newdurationValue });
  };

  state = {
    loanValue: 500,
    updateloanValue: this.updateloanValue,
    durationValue: 6,
    updatedurationValue: this.updatedurationValue
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
