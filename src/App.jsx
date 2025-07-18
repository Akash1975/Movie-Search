import './App.css';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=e76f4147`);
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (error) {
      setMovies([]);
    }
  };

  return (
  <div className="app-container">
    <div className="app-content">
      <h1 className="app-title">🎬 Movie Search</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="search-button" onClick={searchMovies}>
          Search
        </button>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <h2 className="movie-title">{movie.Title}</h2>
            <p className="movie-year">{movie.Year}</p>
            <p className="movie-id">ID: {movie.imdbID}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Footer inside app-container */}
    <footer className="app-footer">
      <p className="footer-name">© 2025 Akash Dhaigude</p>
      <p className="footer-contact">
  <span className="contact-item">
    <img src="/src/assets/Gmail.png" alt="Gmail" className="contact-icon" />
    <a href="mailto:akashdhaigude1975@gmail.com">akashdhaigude1975@gmail.com</a>
  </span>
  <span className="contact-item">
    <img src="/src/assets/insta.png" alt="Instagram" className="contact-icon" />
    <a href="https://www.instagram.com/aka.sh_1907" target="_blank" rel="noreferrer">@aka.sh_1907</a>
  </span>
  <span className="contact-item">
    <img src="/src/assets/linkedln.png" alt="LinkedIn" className="contact-icon" />
    <a href="https://www.linkedin.com/in/akash-dhaigude-25ab952ab" target="_blank" rel="noreferrer">LinkedIn</a>
  </span>
</p>

    </footer>
  </div>
);
}



export default App;


