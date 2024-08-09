import React, { useState } from 'react';
import './App.css';

function App() {
  // a state variable bgColor wuth an initial value of white
  // a setBgColor function that updates the value of bgColor
  const [bgColor, setBgColor] = useState('white');

  // changeBackgroundColor is a function that will be called when the button is clicked
  // it contain an array of colors containing a set of color values
  const changeBackgroundColor = () => {
    const colors = [
      '#FF5733', // Red-Orange
      '#33FF57', // Green
      '#3357FF', // Blue
      '#FF33A1', // Pink
      '#33FFF5', // Aqua
      '#FF33F6', // Magenta
      '#FFC300', // Yellow
      '#DAF7A6', // Light Green
      '#581845', // Dark Purple
      '#900C3F', // Dark Red
      '#C70039', // Red
      '#FF5733', // Orange
      '#FFC300', // Yellow
      '#1C1C1C', // Almost Black
      '#900C3F', // Dark Magenta
      '#FF5733', // Bright Orange
      '#DAF7A6', // Pastel Green
      '#581845', // Deep Purple
      '#C70039', // Crimson
      '#1F618D', // Navy Blue
      '#5DADE2', // Sky Blue
      '#28B463', // Emerald Green
      '#F7DC6F', // Pastel Yellow
      '#A569BD', // Lavender
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ height: '100vh', backgroundColor: bgColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button style={{height: '3rem', borderRadius: '10px', backgroundColor: '#F7DC6F' }} onClick={changeBackgroundColor}>Change Background Color</button>
    </div>
  );
}

export default App;
