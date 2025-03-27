// Video data arrays
const videosData = {
    featured: [
        {
            title: "Reseña y Analisis de Liber Null - Peter J Carroll",
            youtubeId: "dz7Vwbqyo6Q"  // This is correct
        },

        {
            title: "Magia Avanzada para principiantes - Alan Chapman",
            youtubeId: "YEm5Y0TgNNI"  // This is correct
        },
 {
            title: "La Ceremonia de los 9 Ángulos",
            youtubeId: "O0JB8W7098I"  // This is correct
        }
    ],
    documentaries: [
        {
            title: "Historia de la Magia Occidental",
            youtubeId: "YEm5Y0TgNNI"  // This is correct
        },
        {
            title: "Documental: Orígenes del Caos",
            youtubeId: "UNIQUE_ID_HERE"  // Replace with actual YouTube ID
        }
    ],
    audiobooks: [
        {
            title: "Goetia Ilustrado de Crowley (Audiolibro) Lon Milo Duquette parte I",
            youtubeId: "z28VBmuG9QU"
        },
        {
            title: "Goetia Ilustrado de Crowley (Audiolibro) Lon Milo Duquette parte II",
            youtubeId: "FNKLYT_C5fo"
        }
    ],
    tutorials: [
         {
            title: "La Ceremonia de los 9 Ángulos",
            youtubeId: "O0JB8W7098I"  // This is correct
        },
        {
            title: "Empodera tu Magia en Luna Roja",
            youtubeId: "pD1ia46iueY"
        }
    ],
    // Add new category
    // Change book_reviews to match the HTML id "book-reviews"
    "book-reviews": [
       {
            title: "Reseña y Analisis de Liber Null - Peter J Carroll",
            youtubeId: "dz7Vwbqyo6Q"  // This is correct
        },
       {
            title: "Magia Avanzada para principiantes - Alan Chapman",
            youtubeId: "YEm5Y0TgNNI"  // This is correct
        },
        {
            title: "Análisis: Hands-on Chaos Magic",
            youtubeId: "sI24TPrKEkI"
        }
    ]
};

// Function to create video card
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    
    card.innerHTML = `
        <div class="thumbnail-container">
            <img class="video-thumbnail" 
                 src="https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg" 
                 alt="${video.title}">
            <button class="play-button" data-youtube-id="${video.youtubeId}">
                <i class="fas fa-play"></i>
            </button>
            <iframe class="video-frame" 
                    src="" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        </div>
        <div class="video-info">
            <h3>${video.title}</h3>
        </div>
    `;

    return card;
}

// Function to handle video playback
function handleVideoPlay(button) {
    const youtubeId = button.dataset.youtubeId;
    const videoCard = button.closest('.video-card');
    const iframe = videoCard.querySelector('.video-frame');
    const thumbnail = videoCard.querySelector('.video-thumbnail');

    // Pause all other videos and reset their thumbnails
    document.querySelectorAll('.video-frame').forEach(frame => {
        if (frame !== iframe) {
            frame.style.display = 'none';
            frame.src = '';
            const otherCard = frame.closest('.video-card');
            otherCard.querySelector('.video-thumbnail').style.display = 'block';
            otherCard.querySelector('.play-button').style.display = 'block';
        }
    });

    // Hide thumbnail and show video
    thumbnail.style.display = 'none';
    iframe.style.display = 'block';
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    button.style.display = 'none';
}

// Initialize video sections
document.addEventListener('DOMContentLoaded', () => {
    // Load videos for each category
    Object.entries(videosData).forEach(([category, videos]) => {
        const container = document.getElementById(`${category}`);
        if (container) {
            videos.forEach(video => {
                container.appendChild(createVideoCard(video));
            });
        }
    });

    // Add click handlers for play buttons
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', () => handleVideoPlay(button));
    });
});