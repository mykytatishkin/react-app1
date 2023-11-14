import logo from './logo.svg';
import './App.css';
import Library from './components/Library';

function App() {
  let address = 'Kyiv, Khreschatik';

  return (
    <div className="App">
      <h1>Library</h1>
      <Library address={address}/>
    </div>
  );
}

export default App;
