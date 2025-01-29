import "react";
import Playlist from "./components/Playlist";
import "./styles/styles.css"; // Import external stylesheet

function App() {
  return (
    <div className="App">
      <header className="header"> 
      <h1>📻 Music & Podcast Playlist</h1>
      <Playlist />
      </header>
      <footer className="footer">
        <p className="footer">Footer content here</p>
      </footer>
    </div>
  );
};

export default App;
