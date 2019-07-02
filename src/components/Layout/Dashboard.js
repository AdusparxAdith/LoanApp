import React, { Fragment } from "react";
import Footer from "../Layout/Footer";
import { UserConsumer } from "../Context/user-context";

const Dashboard = () => {
  //Greeting function
  const getTimeofDay = time => {
    let hours = time.getHours();
    let timeOfDay =
      hours > 16
        ? "Good Evening"
        : hours > 12
        ? "Good Afternoon"
        : "Good Morning";
    return timeOfDay;
  };

  return (
    /* Accessing global state as a consumer for obtaining results
     @param  {[number]} interestRate [value of obtained interest rate] 
     @param  {[number]} monthlyPayment [value of obtained monthly payment] 
     @param  {[number]} numPayments [value of obtained number of payments] */
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
                  ${monthlyPayment ? monthlyPayment.amount : null}
                </span>{" "}
                per month for {numPayments} months, at an interest rate of{" "}
                {interestRate}
              </p>
            ) : (
              <p className="focusContent">
                {getTimeofDay(new Date())}!
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
