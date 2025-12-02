// Main JavaScript for StreamFlix
let videos = [];

// Load videos from JSON
async function loadVideos() {
    try {
        const response = await fetch('videos.json');
        const data = await response.json();
        videos = data.videos;
        displayVideos();
    } catch (error) {
        console.error('Error loading videos:', error);
        // Fallback to sample videos
        videos = [
            {
                id: 1,
                title: "Sample Movie",
                description: "This is a sample movie description.",
                url: "http://commondatastorage.goog4",
                thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
                category: "movies",
                rating: 4.5,
                year: "2023",
                duration: "2:15"
            }
        ];
        displayVideos();
    }
}

// Display videos in carousels
function displayVideos() {
    const categories = ['movies', 'series', 'new'];
    
    categories.forEach(category => {
        const carousel = document.querySelector(`.video-carousel[data-category="${category}"]`);
        if (!carousel) return;
        
        carousel.innerHTML = '';
        
        const categoryVideos = videos.filter(video => video.category === category);
        
        if (categoryVideos.length === 0) {
            carousel.innerHTML = `
                <div style="min-width: 300px; display: flex; align-items: center; justify-content: center; color: #8c8c8c;">
                    <p>No videos in this category yet</p>
                </div>
            `;
            return;
        }
        
        categoryVideos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.innerHTML = `
                <img src="${video.thumbnail}" class="video-thumb" 
                     onerror="this.src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'">
                <div class="video-info">
                    <h4>${video.title}</h4>
                    <div class="video-meta">
                        <span>${video.year}</span>
                        <span>${video.duration}</span>
                        <span>${video.rating}★</span>
                    </div>
                </div>
            `;
            
            videoCard.addEventListener('click', () => playVideo(video));
            carousel.appendChild(videoCard);
        });
        
        // Add carousel navigation
        addCarouselNavigation(carousel);
    });
}

// Add navigation to carousels
function addCarouselNavigation(carousel) {
    const container = carousel.closest('.container');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
}

// Play video in modal
function playVideo(video) {
    const modal = document.querySelector('.video-modal');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');
    
    videoSource.src = video.url;
    videoPlayer.load();
    
    document.getElementById('video-title').textContent = video.title;
    document.getElementById('video-rating').textContent = video.rating;
    document.getElementById('video-duration').textContent = video.duration;
    document.getElementById('video-year').textContent = video.year;
    document.getElementById('video-description').textContent = video.description;
    
    modal.style.display = 'flex';
    
    // Play video
    setTimeout(() => {
        videoPlayer.play().catch(e => {
            console.log("Autoplay prevented, user must click play");
        });
    }, 300);
}

// Close modal
document.querySelector('.close-modal').addEventListener('click', () => {
    const modal = document.querySelector('.video-modal');
    const videoPlayer = document.getElementById('video-player');
    
    videoPlayer.pause();
    modal.style.display = 'none';
});

// Close modal when clicking outside
document.querySelector('.video-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        const videoPlayer = document.getElementById('video-player');
        videoPlayer.pause();
        e.currentTarget.style.display = 'none';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Watch Now button
document.querySelector('.btn-watch-now').addEventListener('click', () => {
    if (videos.length > 0) {
        playVideo(videos[0]);
    } else {
        alert('No videos available. Add videos in admin panel.');
    }
});

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'rgba(0,0,0,0.95)';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '15px';
            navLinks.style.zIndex = '1000';
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').style.display = 'none';
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', loadVideos);

// Fullscreen change
document.addEventListener('fullscreenchange', updateFullscreenButton);
document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
document.addEventListener('mozfullscreenchange', updateFullscreenButton);
document.addEventListener('MSFullscreenChange', updateFullscreenButton);

function updateFullscreenButton() {
    const isFullscreen = document.fullscreenElement || 
                        document.webkitFullscreenElement || 
                        document.mozFullScreenElement || 
                        document.msFullscreenElement;
    console.log('Fullscreen:', isFullscreen);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    const modal = document.querySelector('.video-modal');
    if (modal.style.display === 'flex') {
        const videoPlayer = document.getElementById('video-player');
        if (e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            if (videoPlayer.paused) {
                videoPlayer.play();
            } else {
                videoPlayer.pause();
            }
        } else if (e.key === 'Escape') {
            videoPlayer.pause();
            modal.style.display = 'none';
        } else if (e.key === 'f' || e.key === 'F') {
            e.preventDefault();
            if (!document.fullscreenElement) {
                const videoContainer = document.querySelector('.video-container');
                if (videoContainer.requestFullscreen) {
                    videoContainer.requestFullscreen();
                } else if (videoContainer.webkitRequestFullscreen) {
                    videoContainer.webkitRequestFullscreen();
                } else if (videoContainer.msRequestFullscreen) {
                    videoContainer.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }
    }
});
