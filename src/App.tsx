import React from 'react'
import './styles/App.css'
import { Footer } from './components/Footer';
import { MatchDay } from './components/MatchDay';

const App: React.FC = () => {
  return (
      <div className="App h-screen flex flex-col">
          <header>Why no render</header>
          <main className="card flex-1">
              <MatchDay />
          </main>
          <Footer />
      </div>
  )
}


export default App
