import React from 'react';
import './styles/App.css';
import { Footer } from './components/Footer';
import { MatchDay } from './components/MatchDay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className='App h-screen flex flex-col'>
      <header>
        <h1 className='text-2xl font-bold mb-8'>Bundesliga Scores</h1>
      </header>
      <Router>
        <Routes>
          <Route path='/' element={<MatchDay />} />
          <Route path='/:urlMatchDay' element={<MatchDay />} />
        </Routes>
      </Router>
      <main className='card flex-1'></main>
      <Footer />
    </div>
  );
};

export default App;
