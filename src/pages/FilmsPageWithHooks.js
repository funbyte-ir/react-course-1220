import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function FilmsPageWithHooks() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("http://www.omdbapi.com/?apikey=bb53441c&s=avengers");
                setMovies(response.data.Search || []);
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    // Styles
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        direction: 'rtl',
        backgroundColor: '#f5f5f5'
    };



    return (
        <>{loading ? <div>Loading...</div> : <div style={containerStyle}>
            {movies.map((movie) => (
                <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                    <div style={{
                        border: '1px solid #ccc',
                        background: '#fff',
                        padding: '10px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        margin: '5px'
                    }}>
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'cover',
                                borderRadius: '8px 8px 0 0'
                            }}
                        />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                </Link>
            ))}
        </div>}</>
    );
}