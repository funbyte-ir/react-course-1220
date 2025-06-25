import axios from "axios";

export default function FilmsPage() {
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

    window.onload = function () {
        axios.get("http://www.omdbapi.com/?apikey=bb53441c&s=avengers")
            .then(res => {
                const films = res.data.Search || [];
                const container = document.getElementById("films-container");
                if (container) {
                    container.innerHTML = "";
                    films.forEach(film => {
                        // یک div ساده برای نمایش فیلم‌ها
                        const card = document.createElement("div");
                        card.style.border = "1px solid #ccc";
                        card.style.background = "#fff";
                        card.style.padding = "10px";
                        card.style.borderRadius = "8px";
                        card.style.textAlign = "center";
                        card.style.margin = "5px";
                        card.innerHTML = `
                            <img src="${film.Poster}" alt="${film.Title}" style="width:100%;height:300px;object-fit:cover;border-radius:8px 8px 0 0;" />
                            <h3>${film.Title}</h3>
                            <p>${film.Year}</p>
                        `;
                        container.appendChild(card);
                    });
                }
            });
    };

    return (
        <div id="films-container" style={containerStyle}></div>
    );
}