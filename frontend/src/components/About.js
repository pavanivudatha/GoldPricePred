import React from "react";
import "./GoldPredictor.css";

const About = () => {
  return (
    <div className="gold-container">
    <div className="gold-navbar">
        <div className="nav-brand">💰Gold Price Predictor</div>
        <div className="nav-links">
            <a href="/">Home</a>
            <a href="/history">History</a>
            <a href="/about">About</a>
        </div>
    </div>
    <div className="gold-card animate__animated animate__fadeIn">
      <h2>About Gold Price Predictor</h2>
      <p>
        This application predicts future gold prices using machine learning models trained on historical data. 
        It provides users with an intuitive interface and visually rich experience.
      </p>
      <p>
        <h3>Technologies used:</h3> Flask, React.js, Plotly, and a time-series forecasting model.
      </p>
    </div>
    </div>
  );
};

export default About;
