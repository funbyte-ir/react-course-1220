
import { Card, CardMedia, Chip, Typography } from "@mui/material";
import { useState } from "react";

export default function FilmCard({ film }) {
    const [raised, setRaised] = useState(false);
    return (

        <Card
            onMouseOver={() => setRaised(true)}
            onMouseOut={() => setRaised(false)}
            raised={raised}
            className="relative"
            sx={{
                // backgroundColor: "#2B2B2B",
                borderRadius: "15px",
            }}
        >
            <CardMedia
                className=" bg-gradient-to-b"
                sx={{
                    borderRadius: "15px",
                    maskImage: "linear-gradient(black, transparent)",
                    aspectRatio: "6/9"
                }}
                component="img"
                image={film.Poster}
                alt={film.Title}
            />
            <div className="absolute top-2 right-2">
                <Chip
                    icon={
                        <Typography
                            sx={{ color: "#3d3d3d" }}
                            fontSize={16}
                            color="textColor"
                        >
                            IMDb
                        </Typography>
                    }
                    label={film.imdbRating}
                    sx={{
                        backgroundColor: "#F3CE13",
                        color: "#3d3d3d",
                        fontWeight: "900",
                    }}
                />
            </div>

            <div className="absolute bottom-2 right-2 left-2 justify-center">
                <Typography
                    textAlign="center"
                    fontSize={16}
                >
                    {film.Title}
                </Typography>
            </div>

        </Card>

    );
}