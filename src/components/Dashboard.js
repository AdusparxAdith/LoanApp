import React, { Fragment } from "react";
import Footer from "./Footer";
import { UserConsumer } from "./Context/user-context";

const Dashboard = () => {
  const getResult = sliderState => {
    console.log(sliderState);
  };
  return (
    <UserConsumer>
      {({ loanValue, durationValue }) => (
        <Fragment>
          <div className="dashBoard">
            {loanValue} ,{durationValue}
          </div>
          <Footer getResult={getResult} />
        </Fragment>
      )}
    </UserConsumer>
  );
};

export default Dashboard;
