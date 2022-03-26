// app user interface


import React from 'react'
import logo from './logo.svg'
import './App.css'
function WelcomeMessage() {
 return <p>Welcome!</p>
}
function App() {
 return (
 <div className="App">
 <header className="App-header">
 <img src={logo} className="App-logo" alt="lo
 <p>
 Edit <code>src/App.js</code> and save to r
 </p>
 <WelcomeMessage />
 <a
 className="App-link"
 href="https://reactjs.org"
 target="_blank"
 rel="noopener noreferrer"
 >
 Learn React
 </a>
 </header>
 </div>
 )
}
export default App