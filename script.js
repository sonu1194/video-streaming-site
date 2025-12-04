// Video data will be stored in localStorage
const STORAGE_KEY = 'al-ameen-videos';
const ADMIN_PASSWORD = 'alameen123'; // Change this for production

// Sample Islamic videos
const sampleVideos = {
    quran: [
        {
            id: 1,
            title: "Surah Al-Fatiha with Translation",
            description: "Beautiful recitation of Surah Al-Fatiha with English translation and explanation.",
            thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            speaker: "Sheikh Mishary Rashid",
            duration: "5:24",
            date: "2024-01-15",
            category: "quran"
        }
    ],
    sunnah: [
        {
            id: 2,
            title: "40 Hadith Nawawi - Introduction",
            description: "Introduction to the collection of 40 Hadith by Imam Nawawi.",
            thumbnail: "https://images.unsplash.com/photo-1594736797933-d0e6e4f6f8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            speaker: "Dr. Yasir Qadhi",
            duration: "45:30",
            date: "2024-01-10",
            category: "sunnah"
        }
    ],
    lectures: [
        {
            id: 3,
            title: "The Importance of Seeking Knowledge",
            description: "Friday lecture about the virtue of seeking Islamic knowledge.",
            thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            speaker: "Mufti Menk",
            duration: "38:15",
            date: "2024-01-05",
            category: "lectures"
        }
    ],
    kids: [
        {
            id: 4,
            title: "Prophet Stories for Children",
            description: "Animated stories of the Prophets for children.",
            thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            speaker: "Islamic Kids TV",
            duration: "22:45",
            date: "2024-01-01",
            category: "kids"
        }
    ]
};

// Initialize videos in localStorage
function initializeVideos() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleVideos));
    }
}

// Load videos for each category
function loadVideos() {
    initializeVideos();
    const videos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    Object.keys(videos).forEach(category => {
        const carousel = document.querySelector(`.video-carousel[data-category="${category}"]`);
        if (carousel) {
            carousel.innerHTML = '';
            videos[category].forEach(video => {
                carousel.appendChild(createVideoCard(video));
            });
        }
    });
}

// Create video card element
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.id = video.id;
    card.dataset.category = video.category;
    
    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="play-btn">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="video-info">
            <h3>${video.title}</h3>
            <div class="video-meta">
                <span><i class="fas fa-user"></i> ${video.speaker}</span>
                <span><i class="fas fa-clock"></i> ${video.duration}</span>
            </div>
            <p>${video.description.substring(0, 80)}...</p>
        </div>
    `;
    
    card.addEventListener('click', () => playVideo(video));
    return card;
}

// Play video in modal
function playVideo(video) {
    const modal = document.querySelector('.video-modal');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    
    videoSource.src = video.videoUrl;
    videoPlayer.load();
    
    document.getElementById('video-title').textContent = video.title;
    document.getElementById('video-speaker').textContent = video.speaker;
    document.getElementById('video-duration').textContent = video.duration;
    document.getElementById('video-date').textContent = video.date;
    document.getElementById('video-description').textContent = video.description;
    
    modal.style.display = 'flex';
}

// Close modal
document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.querySelector('.video-modal').style.display = 'none';
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.pause();
});

// Carousel navigation
document.querySelectorAll('.prev-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const carousel = this.closest('.section').querySelector('.video-carousel');
        carousel.scrollLeft -= 300;
    });
});

document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const carousel = this.closest('.section').querySelector('.video-carousel');
        carousel.scrollLeft += 300;
    });
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn')?.addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.querySelector('.video-modal');
    if (e.target === modal) {
        modal.style.display = 'none';
        document.getElementById('video-player').pause();
    }
});
