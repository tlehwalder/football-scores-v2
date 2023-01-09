import React from 'react';
import './styles/App.css';
import { Footer } from './components/Footer';
import { MatchDay } from './components/MatchDay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <div className='App flex flex-col'>
      <header>
        <h1 className='text-2xl font-bold mb-8'>Bundesliga Scores</h1>
      </header>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<MatchDay />} />
            <Route path='/:urlMatchDay' element={<MatchDay />} />
          </Routes>
        </QueryClientProvider>
      </Router>
      <main className='card flex-1'></main>
      <Footer />
    </div>
  );
};

export default App;
