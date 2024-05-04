import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const url =   "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        let map = {};
        const arr = data.trim().split("\n");
        arr.forEach((n) => (map[n] = (map[n] || 0) + 1));
        setData(map);
      })
      .catch((e) => console.log("Data fetch error: ", e));
  }, []);

  return (
    <div id="container">
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
        }}
      >
        <div id="chart-y">
          <span>30</span>
          <span>20</span>
          <span>10</span>
          <span>0</span>
        </div>
        <div id="chart">
          {Object.values(data).map((n) => (
            <span style={{ height: n * 10 }}>{n}</span>
          ))}
        </div>
      </div>
      <div id="chart-x">
        {Object.keys(data).map((key) => (
          <span>{key}</span>
        ))}
      </div>
    </div>
  );
}

export default App;