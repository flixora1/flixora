document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // FLIXORA MOVIE DATABASE
    // =====================================================

    const movieDatabase = {

"Inception": {
    title: "Inception",
    year: "2010",
    rating: "8.8",
    genre: "Sci-Fi • Thriller",
    runtime: "2h 28m",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "A skilled thief who steals secrets through dreams is given a chance to erase his past by completing an impossible mission.",
    video: "YOUR_VIDEO_URL_HERE"
},

        "Avengers: Infinity War": {
            title: "Avengers: Infinity War",
            year: "2018",
            rating: "8.4",
            genre: "Action • Adventure • Sci-Fi",
            runtime: "2h 29m",
            poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            description: "The Avengers and their allies face their greatest threat as Thanos seeks to collect the Infinity Stones."
        },

        "Interstellar": {
            title: "Interstellar",
            year: "2014",
            rating: "8.7",
            genre: "Sci-Fi • Drama • Adventure",
            runtime: "2h 49m",
            poster: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
            description: "A team of explorers travels through a wormhole in space in search of a new home for humanity."
        },

        "Wonder Woman": {
            title: "Wonder Woman",
            year: "2017",
            rating: "7.4",
            genre: "Action • Adventure • Fantasy",
            runtime: "2h 21m",
            poster: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
            description: "Diana, an Amazon warrior, leaves her island home and discovers her extraordinary powers while fighting to protect humanity."
        },

        "The Batman": {
            title: "The Batman",
            year: "2022",
            rating: "7.8",
            genre: "Crime • Drama • Action",
            runtime: "2h 56m",
            poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
            description: "Batman investigates a series of mysterious crimes while uncovering a dark conspiracy within Gotham City."
        },

        "Spider-Man": {
            title: "Spider-Man",
            year: "2021",
            rating: "8.2",
            genre: "Action • Adventure • Sci-Fi",
            runtime: "2h 28m",
            poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
            description: "A young superhero faces a dangerous new challenge when characters from other worlds enter his reality."
        }

    };


    // =====================================================
    // DATABASE TEST
    // =====================================================

    console.log("🔥 FLIXORA DATABASE READY");
    console.log(movieDatabase);


    // =====================================================
    // SEARCH SYSTEM
    // =====================================================

    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const searchText =
                    searchInput.value
                    .toLowerCase()
                    .trim();

                const movieCards =
                    document.querySelectorAll(".movie-card");

                movieCards.forEach(function (card) {

                    const titleElement =
                        card.querySelector("h3");

                    if (!titleElement) {
                        return;
                    }

                    const movieTitle =
                        titleElement.textContent
                        .toLowerCase();

                    if (
                        movieTitle.includes(searchText)
                    ) {

                        card.style.display = "";

                    } else {

                        card.style.display = "none";

                    }

                });

            }
        );

    }


    // =====================================================
    // DATABASE MOVIE CARDS
    // =====================================================

    const databaseMovies =
        document.getElementById("databaseMovies");

    if (databaseMovies) {

        databaseMovies.innerHTML = "";

        Object.values(movieDatabase).forEach(
            function (movie) {

                const card =
                    document.createElement("div");

                card.className =
                    "movie-card";

                card.innerHTML = `

                    <img
                        src="${movie.poster}"
                        alt="${movie.title} Poster"
                    >

                    <div class="movie-info">

                        <h3>${movie.title}</h3>

<div class="movie-meta">

    <span>
        ${movie.year}
    </span>

    <span class="rating-badge">
        ⭐ ${movie.rating}
    </span>

</div>

                        <button
                            class="watch-btn"
                            data-movie="${movie.title}"
                            type="button"
                        >
                            ▶ Watch Now
                        </button>

                    </div>

                `;

                databaseMovies.appendChild(card);

            }
        );

    }


    // =====================================================
    // WATCH BUTTON SYSTEM
    // =====================================================

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(".watch-btn");

            if (!button) {
                return;
            }

            const movieCard =
                button.closest(".movie-card");

            if (!movieCard) {
                return;
            }

            const titleElement =
                movieCard.querySelector("h3");

            if (!titleElement) {
                return;
            }

            const movieTitle =
                titleElement.textContent.trim();

            const selectedMovie =
                movieDatabase[movieTitle];

            if (!selectedMovie) {

                console.error(
                    "Movie not found:",
                    movieTitle
                );

                alert(
                    "Movie data not found!"
                );

                return;
            }


            // SAVE SELECTED MOVIE

            localStorage.setItem(
                "selectedMovie",
                JSON.stringify(selectedMovie)
            );


            console.log(
                "🎬 Selected Movie:",
                selectedMovie.title
            );


            // OPEN MOVIE DETAILS PAGE

            window.location.href =
                "movie.html";

        }
    );


    // =====================================================
    // EXPLORE BUTTON
    // =====================================================

    const exploreButton =
        document.querySelector(".hero-btn");

    if (exploreButton) {

        exploreButton.addEventListener(
            "click",
            function () {

                const moviesSection =
                    document.querySelector(
                        ".movies-section"
                    );

                if (moviesSection) {

                    moviesSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // =====================================================
    // FLIXORA READY
    // =====================================================

    console.log(
        "🔥 FLIXORA APP.JS READY"
    );

// ===============================
// CATEGORY FILTER
// ===============================

const categoryButtons =
    document.querySelectorAll(".category-btn");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.textContent.toLowerCase();

        const movieCards =
            document.querySelectorAll(".movie-card");

        movieCards.forEach(card => {

            const title =
                card.querySelector("h3")
                ?.textContent
                .toLowerCase() || "";

            if (
                category.includes("action") &&
                !title.includes("batman") &&
                !title.includes("avengers") &&
                !title.includes("spider")
            ) {
                card.style.display = "none";
            }

            else {
                card.style.display = "";
            }

        });

    });

});

});

// ===============================
// EXPLORE MOVIES SCROLL
// ===============================

const exploreMoviesBtn = document.getElementById("exploreMoviesBtn");

if (exploreMoviesBtn) {
    exploreMoviesBtn.addEventListener("click", function () {

        const trendingSection = document.querySelector(".movies-section:not(.my-list-section)");

        if (trendingSection) {
            trendingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });
}

lucide.createIcons();