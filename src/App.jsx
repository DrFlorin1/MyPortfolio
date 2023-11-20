
import './App.css';
import Intro from './Components/Intro/Intro';
import MoviesSection from './Components/MoviesSection/MoviesSection';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      

      <Intro />

      <MoviesSection />
    </div>
  );
}

export default App;
