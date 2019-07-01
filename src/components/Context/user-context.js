import React, { createContext } from "react";

const UserContext = createContext({
  loanValue: "",
  durationValue: "",
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
    duration: 500,
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
