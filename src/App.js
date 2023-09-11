import Searchbar from './Components/SearchBar';
import Playlist from './Components/Playlist'
import Track from './Components/Track';
import Tracklist from './Components/Tracklist';
import SearchResults from './Components/SearchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
        <Searchbar />
        <Playlist />
        <section className='container'>
        <Tracklist className='box'/>
        <SearchResults className='box'/>
        </section>
      </header>
    </div>
  );
}

export default App;
