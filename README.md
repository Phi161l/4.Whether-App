# 🌤️ Weather Dashboard (Learning Project)

This is a simple learning project that shows how to fetch weather data using two approaches:

1. **Direct Frontend → OpenWeather API**  
   - OpenWeather supports CORS, so the browser can fetch directly.  
   - API key is exposed in the frontend (not safe for production).

2. **Frontend → Custom Backend → OpenWeather API**  
   - API key is stored securely in `.env`.  
   - Backend fetches weather from OpenWeather and sends only needed data to frontend.  
   - Safer and more professional structure.

## 📁 Project Structure
```
project/
├── frontend/
│   ├── index.html     # UI for entering city and displaying weather
│   └── script.js      # JS logic to fetch and display data
├── backend/
│   ├── server.js      # Express server acting as proxy
│   └── .env           # Contains your API key securely
├── .gitignore         # Ignores node_modules and .env
├── package.json       # Backend dependencies
└── README.md          # Project overview
```

## 🚀 Setup & Run
1. **Add your API key in backend/.env**  
```
OPENWEATHER_API_KEY=your_api_key_here
```

2. **Install backend dependencies**  
```
cd backend
npm install
```

3. **Start backend server**  
```
node server.js
```

4. **Open `frontend/index.html`** in browser and test.

## 💡 What You’ll Learn
- Calling public APIs from the frontend  
- Understanding CORS and its role  
- Creating a backend proxy using Node.js and Express  
- Securing API keys with `.env`  
- Separating frontend and backend responsibilities  
- Handling asynchronous data fetching with `fetch` and `async/await`  
- Parsing and displaying JSON data

## ✅ Notes
- This project is for **learning and practice only**.  
- In real apps, **always use a backend** to keep API keys secret.  
- OpenWeather supports CORS for public weather data, but not all APIs do.

---
Built for educational purpose ✨
