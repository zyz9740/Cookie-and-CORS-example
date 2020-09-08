import React from 'react';
import './App.css';

function handleClick() {
    fetch('http://127.0.0.1:3000',{
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: "username=zyz9740"
    })
        // .then(res =>res.formData())
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

function App() {
  return (
    <div className="App">
      <button onClick={handleClick}>login</button>
    </div>
  );
}

export default App;
