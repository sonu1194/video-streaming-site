// Video Database - Pre-loaded with Islamic Content
const videoDatabase = {
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
      category: "quran",
      views: 1250,
      likes: 98
    },
    {
      id: 2,
      title: "Surah Yasin - Heart of the Quran",
      description: "Complete recitation of Surah Yasin with beautiful voice and tajweed.",
      thumbnail: "https://images.unsplash.com/photo-1541544181056-3b8f5b8f9c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      speaker: "Sheikh Abdul Rahman Al-Sudais",
      duration: "22:30",
      date: "2024-01-10",
      category: "quran",
      views: 890,
      likes: 75
    }
  ],
  sunnah: [
    {
      id: 3,
      title: "40 Hadith Nawawi - Introduction",
      description: "Introduction to the collection of 40 Hadith by Imam Nawawi.",
      thumbnail: "https://images.unsplash.com/photo-1594736797933-d0e6e4f6f8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      speaker: "Dr. Yasir Qadhi",
      duration: "45:30",
      date: "2024-01-10",
      category: "sunnah",
      views: 1560,
      likes: 120
    },
    {
      id: 4,
      title: "The Prophet's Character",
      description: "Learning about the beautiful character of Prophet Muhammad (PBUH).",
      thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      speaker: "Mufti Menk",
      duration: "38:15",
      date: "2024-01-05",
      category: "sunnah",
      views: 2340,
      likes: 190
    }
  ],
  lectures: [
    {
      id: 5,
      title: "The Importance of Seeking Knowledge",
      description: "Friday lecture about the virtue of seeking Islamic knowledge.",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      speaker: "Mufti Menk",
      duration: "42:20",
      date: "2024-01-08",
      category: "lectures",
      views: 1870,
      likes: 150
    },
    {
      id: 6,
      title: "Fiqh of Prayer (Salah)",
      description: "Comprehensive guide to the rules and etiquette of prayer.",
      thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      speaker: "Sheikh Assim Al-Hakeem",
      duration: "55:10",
      date: "2024-01-03",
      category: "lectures",
      views: 3120,
      likes: 240
    }
  ],
  kids: [
    {
      id: 7,
      title: "Prophet Stories - Prophet Adam",
      description: "Animated story of Prophet Adam (AS) for children.",
      thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      speaker: "Islamic Kids TV",
      duration: "18:30",
      date: "2024-01-01",
      category: "kids",
      views: 4560,
      likes: 380
    },
    {
      id: 8,
      title: "Islamic Manners for Children",
      description: "Teaching children basic Islamic manners through fun animation.",
      thumbnail: "https://images.unsplash.com/photo-1530424717055-8c7c5e5c2d16?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      speaker: "Little Muslims TV",
      duration: "25:20",
      date: "2024-01-22",
      category: "kids",
      views: 2890,
      likes: 245
    },
    {
      id: 9,
      title: "Learning Arabic Alphabet",
      description: "Fun way for kids to learn Arabic alphabet with songs.",
      thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      speaker: "Arabic for Kids",
      duration: "15:45",
      date: "2024-01-18",
      category: "kids",
      views: 1250,
      likes: 110
    },
    {
      id: 10,
      title: "Five Pillars of Islam - Kids Version",
      description: "Simple explanation of Islam's five pillars for children.",
      thumbnail: "https://images.unsplash.com/photo-1587653915936-3c13c4bdfb70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      speaker: "Islamic Education TV",
      duration: "20:15",
      date: "2024-01-25",
      category: "kids",
      views: 1670,
      likes: 135
    }
  ]
};

// Storage key for localStorage
const STORAGE_KEY = 'al-ameen-videos';
const ADMIN_PASSWORD = 'alameen123';

// Initialize videos in localStorage
function initializeVideos() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videoDatabase));
  }
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

// Load videos for each category
function loadVideos() {
  const videos = initializeVideos();
  
  // Load for each category
  ['quran', 'sunnah', 'lectures', 'kids'].forEach(category => {
    const carousel = document.querySelector(`.video-carousel[data-category="${category}"]`);
    if (carousel && videos[category]) {
      carousel.innerHTML = '';
      videos[category].forEach(video => {
        carousel.appendChild(createVideoCard(video));
      });
    }
  });
  
  // Add carousel functionality
  setupCarousels();
}

// Create video card element
function createVideoCard(video) {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.dataset.id = video.id;
  card.dataset.category = video.category;
  
  card.innerHTML = `
    <div class="video-thumbnail">
      <img src="${video.thumbnail}" alt="${video.title}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';">
      <div class="play-btn">
        <i class="fas fa-play"></i>
      </div>
      <div class="duration-badge">${video.duration}</div>
    </div>
    <div class="video-info">
      <h3>${video.title}</h3>
      <div class="video-meta">
        <span><i class="fas fa-user"></i> ${video.speaker}</span>
        <span><i class="fas fa-eye"></i> ${formatNumber(video.views || 0)}</span>
      </div>
      <p>${video.description.substring(0, 80)}...</p>
      <div class="video-stats">
        <span><i class="fas fa-thumbs-up"></i> ${video.likes || 0}</span>
        <span><i class="fas fa-calendar"></i> ${video.date}</span>
      </div>
    </div>
  `;
  
  card.addEventListener('click', () => playVideo(video));
  return card;
}

// Format numbers (1,000 => 1K)
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num;
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
  
  // Update view count
  updateViewCount(video.id, video.category);
}

// Update view count
function updateViewCount(videoId, category) {
  const videos = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (videos[category]) {
    const videoIndex = videos[category].findIndex(v => v.id === videoId);
    if (videoIndex !== -1) {
      videos[category][videoIndex].views = (videos[category][videoIndex].views || 0) + 1;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
    }
  }
}

// Setup carousel navigation
function setupCarousels() {
  document.querySelectorAll('.prev-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const section = this.closest('.section');
      const carousel = section.querySelector('.video-carousel');
      if (carousel) {
        carousel.scrollLeft -= 300;
      }
    });
  });
  
  document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const section = this.closest('.section');
      const carousel = section.querySelector('.video-carousel');
      if (carousel) {
        carousel.scrollLeft += 300;
      }
    });
  });
}

// Close modal
document.addEventListener('DOMContentLoaded', function() {
  const closeModalBtn = document.querySelector('.close-modal');
  const modal = document.querySelector('.video-modal');
  
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      const videoPlayer = document.getElementById('video-player');
      if (videoPlayer) videoPlayer.pause();
    });
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      const videoPlayer = document.getElementById('video-player');
      if (videoPlayer) videoPlayer.pause();
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  }
  
  // Watch Now button
  const watchNowBtn = document.querySelector('.btn-watch-now');
  if (watchNowBtn) {
    watchNowBtn.addEventListener('click', function() {
      // Scroll to Quran section
      const quranSection = document.getElementById('quran');
      if (quranSection) {
        quranSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Load videos on page load
  loadVideos();
  
  // Show admin links if ?admin=true in URL
  const urlParams = new URLSearchParams(window.location.search);
  if(urlParams.has('admin')) {
    document.querySelectorAll('.admin-link').forEach(link => {
      link.style.display = 'block';
    });
  }
});

// Add some CSS for the video duration badge
const style = document.createElement('style');
style.textContent = `
  .duration-badge {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 8px;
    border-radius: 3px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  
  .video-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: #666;
    font-size: 0.9rem;
  }
  
  .video-stats i {
    margin-right: 5px;
    color: var(--primary-color);
  }
  
  .video-card:hover .play-btn {
    transform: translate(-50%, -50%) scale(1.1);
    background-color: rgba(255, 255, 255, 0.95);
  }
`;
document.head.appendChild(style);
// Add this function to load kids videos specifically
function loadKidsVideos() {
  const kidsVideos = [
    {
      id: 1,
      title: "Prophet Stories for Children",
      description: "Animated stories of the Prophets for children with fun animation.",
      thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      speaker: "Islamic Kids TV",
      duration: "18:30",
      date: "2024-01-01"
    },
    {
      id: 2,
      title: "Arabic Alphabet Song",
      description: "Learn Arabic alphabet with fun songs and animations.",
      thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      speaker: "Arabic for Kids",
      duration: "12:45",
      date: "2024-01-15"
    },
    {
      id: 3,
      title: "Islamic Manners for Kids",
      description: "Teaching children about good manners in Islam.",
      thumbnail: "https://images.unsplash.com/photo-1530424717055-8c7c5e5c2d16?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      speaker: "Little Muslims",
      duration: "15:20",
      date: "2024-01-10"
    }
  ];
  
  const kidsCarousel = document.querySelector('.video-carousel[data-category="kids"]');
  if (kidsCarousel) {
    kidsCarousel.innerHTML = '';
    kidsVideos.forEach(video => {
      const card = document.createElement('div');
      card.className = 'video-card';
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
          <p>${video.description}</p>
        </div>
      `;
      card.addEventListener('click', () => playVideo(video));
      kidsCarousel.appendChild(card);
    });
  }
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', function() {
  loadKidsVideos();
});
