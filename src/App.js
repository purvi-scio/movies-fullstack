import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Movies from './components/Movies';

function App() {
  return (
    <div className='App'>
      <Header />
      <Movies/>
    </div>
  );
}

export default App;