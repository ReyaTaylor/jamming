import logo from './logo.svg';
import './App.css';
import Searchbar from './SearchBar/SearchBar';
import Playlist from './Playlist/Playlist';
import Track from './Track/Track';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar />
        <Playlist />
        <Track />
      </header>
    </div>
  );
}

export default App;
