import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="12" />
      <PetInfo animal="fish" age="2" />
    </div>
  );
}

export default App;
