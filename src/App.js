import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Options from './components/Options'
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container py-4">
        <Options />
        <Search />
        <Table />
      </div>
    </div>
  );
}

export default App