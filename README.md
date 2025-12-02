# StreamFlix - Netflix-like Video Streaming Platform

A complete video streaming website with admin panel for video management.

## Live Demo
[Your site will be live at: your-site-name.netlify.app]

## Features

### Public Website:
- Netflix-like interface
- Video carousels by category (Movies, Series, New Releases)
- Fullscreen video player with controls
- Responsive design (works on mobile/tablet/desktop)
- Hero banner with call-to-action

### Admin Panel (Password Protected):
- Add new videos with forms
- View all videos in dashboard
- Statistics dashboard
- Backup/export functionality
- Password protection (change default password!)

## Setup Instructions

### 1. Upload to GitHub
1. Create repository on GitHub
2. Upload all 7 files:
   - `index.html` (Main website)
   - `admin.html` (Admin panel)
   - `style.css` (Styles)
   - `script.js` (JavaScript)
   - `videos.json` (Video database)
   - `netlify.toml` (Netlify config)
   - `README.md` (This file)

### 2. Deploy to Netlify
1. Go to [Netlify.com](https://netlify.com)
2. Click "Add new site" → "Import from Git"
3. Choose GitHub → Select your repository
4. Click "Deploy site"
5. Your site is now live!

## Accessing Your Site

### Public Website:
- URL: `your-site-name.netlify.app`
- No login required
- Anyone can watch videos

### Admin Panel:
- URL: `your-site-name.netlify.app/admin.html`
- Default password: `admin123` (CHANGE THIS IMMEDIATELY!)

## How to Add Your Own Videos

### Method 1: Edit videos.json directly
1. Open `videos.json` file
2. Add your video object:
```json
{
  "id": 7,
  "title": "Your Video Title",
  "description": "Your description here",
  "url": "https://YOUR-VIDEO-LINK.com/video.mp4",
  "thumbnail": "https://thumbnail-url.com/image.jpg",
  "category": "movies",
  "rating": 4.5,
  "year": "2023",
  "duration": "2:15"
}
