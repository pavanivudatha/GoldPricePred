import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import "./GoldPredictor.css";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const GoldPredictor = () => {
  const [date, setDate] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);


  const predictPrice = async () => {
    try {
      const res = await axios.get(`https://goldpricepred.onrender.com/predict?date=${date}`);
      setPrediction(res.data.predicted_price);
      setHistory((prev) => [...prev, { date, price: res.data.predicted_price }]);
      setError("");
      const newHistory = JSON.parse(localStorage.getItem("goldHistory") || "[]");
    const exists = newHistory.some((entry) => entry.date === date);
    if (!exists) {
      newHistory.unshift({ date, price: res.data.predicted_price });
      localStorage.setItem("goldHistory", JSON.stringify(newHistory));
    } 
  }catch (err) {
      console.error("❌ API Error:", err);
      setPrediction(null);
      setError("Failed to get prediction. Try another date.");
    }
  };

  const chartData = {
    labels: history.map((h) => h.date),
    datasets: [
      {
        label: "Predicted Price",
        data: history.map((h) => h.price),
        fill: false,
        borderColor: "#FFD700",
        tension: 0.3,
        pointBackgroundColor: "#fff",
      },
    ],
  };

  return (
    <div className="gold-container">
      <div className="gold-navbar">
  <div className="nav-brand">💰Gold Price Predictor</div>
  <div className="nav-links">
    <Link to="/">Home</Link>
<Link to="/history">History</Link>
<Link to="/about">About</Link>
  </div>
</div>


      <div className="gold-card animate__animated animate__fadeInUp">
        <h2 className="gold-title">💰 Gold Price Predictor</h2>
        <input
          type="date"
          className="gold-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        
        <button className="gold-button" onClick={predictPrice}>
          Predict
        </button>
        <button className="gold-button" onClick={() => {setDate(""); setPrediction(null); setError(""); setHistory([]);}}>
          Clear
        </button>
        {prediction && (
          <div className="gold-result animate__animated animate__fadeIn">
            <h3>Predicted Price: <span>₹{prediction}</span></h3>
          </div>
        )}
        {error && <p className="gold-error">{error}</p>}

        {history.length > 1 && (
          <div className="gold-chart">
            <Line data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GoldPredictor;
