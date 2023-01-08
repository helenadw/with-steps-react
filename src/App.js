import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './AppBar.tsx'
import Hero from './Hero.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
        <Hero />
      </header>
    </div>
  );
}

export default App;
