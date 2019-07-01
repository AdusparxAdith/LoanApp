import React, { Fragment } from "react";
import Footer from "./Footer";
import { UserConsumer } from "./Context/user-context";

const Dashboard = () => {
  const getResult = sliderState => {
    console.log(sliderState);
  };
  return (
    <UserConsumer>
      {({ result: { interestRate, monthlyPayment, numPayments } }) => (
        <Fragment>
          <div className="dashBoard">
            {monthlyPayment ? (
              <p>
                You have to pay {monthlyPayment ? monthlyPayment.amount : null}{" "}
                per month for {numPayments} months, at an interest rate of{" "}
                {interestRate}
              </p>
            ) : (
              <p>Welcome! </p>
            )}
          </div>
          <Footer getResult={getResult} />
        </Fragment>
      )}
    </UserConsumer>
  );
};

export default Dashboard;
