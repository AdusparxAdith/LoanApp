import React, { Fragment, useState } from "react";
import Footer from "./Footer";
import { UserConsumer } from "./Context/user-context";

const Dashboard = () => {
  const [sliderState, setSliderState] = useState(0);
  const getResult = sliderState => {
    console.log(sliderState);
  };
  return (
    <UserConsumer>
      {({ loanValue }) => (
        <Fragment>
          <div className="dashBoard">{loanValue}</div>
          <Footer getResult={getResult} />
        </Fragment>
      )}
    </UserConsumer>
  );
};

export default Dashboard;
