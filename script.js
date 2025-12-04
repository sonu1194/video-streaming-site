// Database configuration
const DB_CONFIG = {
  url: 'https://raw.githubusercontent.com/yourusername/al-ameen-institute/main/database/videos.json',
  localKey: 'al-ameen-videos-local'
};

// Load videos from JSON database
async function loadVideos() {
  try {
    // Try to load from local storage first
    const localData = localStorage.getItem(DB_CONFIG.localKey);
    
    if (localData) {
      displayVideos(JSON.parse(localData));
    }
    
    // Always try to fetch from remote JSON
    const response = await fetch(DB_CONFIG.url);
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(DB_CONFIG.localKey, JSON.stringify(data));
      displayVideos(data);
    }
  } catch (error) {
    console.error('Error loading videos:', error);
    // Load sample data if both fail
    loadSampleVideos();
  }
}

function displayVideos(data) {
  const categories = data.categories || [];
  const videos = data.videos || [];
  
  categories.forEach(category => {
    const carousel = document.querySelector(`.video-carousel[data-category="${category.name}"]`);
    if (carousel) {
      carousel.innerHTML = '';
      const categoryVideos = videos.filter(video => video.category === category.name);
      
      categoryVideos.forEach(video => {
        carousel.appendChild(createVideoCard(video));
      });
      
      // Add category header if exists
      const sectionHeader = carousel.closest('.section').querySelector('.section-header h2');
      if (sectionHeader) {
        sectionHeader.innerHTML = `<i class="${category.icon}"></i> ${category.displayName}`;
      }
    }
  });
}

// Updated createVideoCard function for JSON data
function createVideoCard(video) {
  const card = document.createElement('div');
  card.className = 'video-card';
  card.dataset.id = video.id;
  card.dataset.category = video.category;
  
  card.innerHTML = `
    <div class="video-thumbnail">
      <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
      <div class="play-btn">
        <i class="fas fa-play"></i>
      </div>
      ${video.duration ? `<div class="video-duration">${video.duration}</div>` : ''}
    </div>
    <div class="video-info">
      <h3>${video.title}</h3>
      <div class="video-meta">
        <span><i class="fas fa-user"></i> ${video.speaker}</span>
        <span><i class="fas fa-eye"></i> ${video.views ? formatNumber(video.views) : '0'}</span>
        ${video.difficulty ? `<span class="difficulty ${video.difficulty}">${video.difficulty}</span>` : ''}
      </div>
      <p>${video.description.substring(0, 80)}...</p>
    </div>
  `;
  
  card.addEventListener('click', () => playVideo(video));
  return card;
}

// Helper function to format numbers
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// Updated admin panel code to work with JSON
async function loadAdminVideos() {
  try {
    const response = await fetch(DB_CONFIG.url);
    const data = await response.json();
    const container = document.getElementById('videos-container');
    
    container.innerHTML = '';
    
    data.videos.sort((a, b) => b.id - a.id).forEach(video => {
      const videoItem = document.createElement('div');
      videoItem.className = 'video-item';
      videoItem.innerHTML = `
        <div>
          <strong>${video.title}</strong>
          <div style="color: #666; font-size: 0.9rem; margin-top: 0.5rem;">
            ${video.category} • ${video.speaker} • ${video.duration} • ${video.views} views
          </div>
        </div>
        <div class="video-actions">
          <button class="btn-edit" onclick="editVideo(${video.id})">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="btn-delete" onclick="deleteVideo(${video.id})">
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      `;
      container.appendChild(videoItem);
    });
  } catch (error) {
    console.error('Error loading admin videos:', error);
  }
}

// Admin form submission for JSON
document.getElementById('add-video-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const newVideo = {
    id: Date.now(),
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    category: document.getElementById('category').value,
    videoUrl: document.getElementById('videoUrl').value,
    thumbnail: document.getElementById('thumbnail').value,
    speaker: document.getElementById('speaker').value,
    duration: document.getElementById('duration').value,
    date: document.getElementById('date').value || new Date().toISOString().split('T')[0],
    views: 0,
    likes: 0,
    difficulty: document.getElementById('difficulty').value || 'beginner',
    language: document.getElementById('language').value || 'English',
    tags: document.getElementById('tags').value ? document.getElementById('tags').value.split(',') : []
  };
  
  try {
    // In a real application, you would send this to a backend API
    // For now, we'll update local storage
    const localData = JSON.parse(localStorage.getItem(DB_CONFIG.localKey)) || { videos: [] };
    localData.videos.push(newVideo);
    localStorage.setItem(DB_CONFIG.localKey, JSON.stringify(localData));
    
    alert('Video added successfully! (Note: This is saved locally. In production, connect to a backend API)');
    this.reset();
    loadAdminVideos();
  } catch (error) {
    alert('Error adding video: ' + error.message);
  }
});// This script can be used with GitHub Actions to automatically update the JSON
const fs = require('fs');
const path = require('path');

// Read current database
const dbPath = path.join(__dirname, 'videos.json');
let database = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Function to add new video
function addVideo(videoData) {
  videoData.id = Date.now();
  database.videos.push(videoData);
  
  // Update stats
  database.siteStats.totalVideos = database.videos.length;
  database.siteStats.lastUpdated = new Date().toISOString();
  
  fs.writeFileSync(dbPath, JSON.stringify(database, null, 2));
  console.log('Video added successfully!');
}

// Function to update video
function updateVideo(id, updates) {
  const index = database.videos.findIndex(v => v.id === id);
  if (index !== -1) {
    database.videos[index] = { ...database.videos[index], ...updates };
    database.siteStats.lastUpdated = new Date().toISOString();
    fs.writeFileSync(dbPath, JSON.stringify(database, null, 2));
    console.log('Video updated successfully!');
  } else {
    console.log('Video not found');
  }
}

// Example usage:
// addVideo({
//   title: "New Lecture",
//   description: "Description here",
//   category: "lectures",
//   videoUrl: "https://example.com/video.mp4",
//   thumbnail: "https://example.com/image.jpg",
//   speaker: "Speaker Name",
//   duration: "30:00",
//   date: "2024-01-25"
// });
