import axios from "axios";
import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,

    Skeleton,
    useTheme,
} from '@mui/material';
import FilmCard from "../components/FilmCard";



export default function FilmsPageWithMui() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

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


    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
            {loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} sx={{ borderRadius: "20px" }}>
                        <Skeleton variant="rectangular" sx={{ height: "210px" }} />
                        <CardContent>
                            <Skeleton variant="text" />
                        </CardContent>
                    </Card>
                ))
            ) : (
                movies.map((movie) => (
                    <FilmCard film={movie} key={movie.imdbID} />
                ))
            )}
        </div>
    );
}