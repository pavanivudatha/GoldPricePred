import React, { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("goldHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("goldHistory");
    setHistory([]);
  };

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
      <h2>Prediction History</h2>
      {history.length === 0 ? (
        <p>No predictions yet.</p>
      ) : (
        <div>
          <ul>
            {history.map((entry, i) => (
              <li key={i}>
                <strong>{entry.date}</strong> — ${entry.price}
              </li>
            ))}
          </ul>
          <button onClick={clearHistory}>🗑️ Clear History</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default History;
