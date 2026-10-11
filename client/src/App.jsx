import { useState, useEffect } from 'react'

function App() {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5001/api/dishes')
      .then(res => res.json())
      .then(data => setDishes(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', textAlign: 'center', background: '#fff3e0', minHeight: '100vh' }}>
      <h1>🍛 Iqra Asad FA2026 - Restaurant App 🍛</h1>
      <h2 style={{ color: 'green' }}>Backend: WORKING on 5001 ✅</h2>
      <h2 style={{ color: 'blue' }}>Frontend: WORKING on 5172 ✅</h2>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Our Menu - Today's Special:</h3>
        {dishes.map((dish, i) => (
          <div key={i} style={{ 
            border: '2px solid orange', 
            margin: '10px auto', 
            padding: '15px', 
            width: '300px',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ margin: '5px' }}>{dish.name}</h4>
            <p style={{ margin: '5px' }}>Rs. {dish.price}</p>
            <button style={{ background: 'green', color: 'white', padding: '8px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Order Now</button>
          </div>
        ))}
      </div>
      
      <p style={{ marginTop: '40px', fontWeight: 'bold' }}>FA2026 - Iqra Asad - Full Stack MERN Project Complete! 🎉</p>
    </div>
  )
}

export default App