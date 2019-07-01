import React, { Fragment } from "react";
import Footer from "../Layout/Footer";
import { UserConsumer } from "../Context/user-context";

const Dashboard = () => {
  const convert = amount => {
    return `USD ${amount} `;
  };
  return (
    <UserConsumer>
      {({ result: { interestRate, monthlyPayment, numPayments } }) => (
        <Fragment>
          <div className="borderClass" />
          <div className="dashBoard">
            {monthlyPayment ? (
              <p className="focusContent">
                You have to pay{" "}
                <span
                  className={`highlight ${interestRate > 0.4 ? "loss" : ""}`}
                >
                  {monthlyPayment ? convert(monthlyPayment.amount) : null}
                </span>{" "}
                per month for {numPayments} months, at an interest rate of{" "}
                {interestRate}
              </p>
            ) : (
              <p className="focusContent">
                Welcome!
                <br />
                <span className="highlight"> Slide to begin</span>{" "}
              </p>
            )}
          </div>

          <Footer />
        </Fragment>
      )}
    </UserConsumer>
  );
};

export default Dashboard;
