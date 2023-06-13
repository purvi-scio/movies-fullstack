import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Movies from './components/Movies';
import movies from './movies.json'

function App() {

  let login=true;
  return (
    <div className='App'>
      {
        // login ? <h1 style={{color: "red"}}>Logged In</h1> : <h1>Logged Out</h1>
        (()=>{

          if(login){
            return <h1 style={{color: "blue"}}>Logged In</h1>
          }else{
            return <h1>Logged Out</h1>
          }

        })()
      }
      <Header />
      <div className='main'>
        {
          movies.map((movie, index) => {
            return (
            <Movies 
            key={index}
            title={movie.Title}
            year={movie.Year}
            img={movie.Poster}
            />
            )
          })
        }

        
      </div>
    </div> 
  );
}

export default App;