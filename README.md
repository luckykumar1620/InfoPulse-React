# 📰 InfoPulse – Real-Time News App

InfoPulse is a **React-based News Application** that brings the latest headlines from multiple categories in real-time.  
It is designed with a **clean UI, smooth infinite scrolling, and top-loading progress bar** to enhance user experience.

---

## ✨ Features

- 🔥 **Real-time News** using News API (API key is securely hidden via `.env.local`).
- 📜 **Infinite Scroll** for seamless browsing without reloads.
- 📊 **Top Loading Progress Bar** for smooth transitions.
- 🎨 Responsive UI built with **React + Bootstrap**.
- ⚡ Optimized using **React Hooks** (`useState`, `useEffect`).

---

## 🛠️ Tech Stack

- **React.js** – Frontend Library  
- **Bootstrap 5** – Styling  
- **React-Infinite-Scroll-Component** – Infinite scrolling  
- **React-Top-Loading-Bar** – Progress indicator  
- **NewsAPI.org** – News data source  

---
## 📸 Screenshots
![Home Page]<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/db2f420f-e5a2-4d13-a44e-9a8a5445e759" />

### Features Page
![Features]<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/141a7d6d-dabb-4098-996f-39a36a79df46" />
## 📂 Project Structure

InfoPulse/
│── src/
│ ├── components/
│ │ ├── Navbar.js # Top navigation bar
│ │ ├── NewsItem.js # Single news card component
│ │ ├── News.js # Main news fetching + infinite scroll logic
│ │ ├── Spinner.js # Loading spinner
│ ├── App.js # App entry point
│ ├── index.js # React DOM render
│ └── App.css # Global styles
│
│── .env.local # API key (hidden from GitHub)
│── package.json
│── README.md



⚙️ Installation & Setup Guide

Follow the steps below to run InfoPulse on your local system 👇
🛠️ 1. Clone the Repository
git clone https://github.com/luckykumar1620/InfoPulse.git
cd InfoPulse

📦 2. Install Dependencies
Make sure you have Node.js (>=16) and npm installed.
Then run:
  npm install

🔑 3. Configure Environment Variables
To keep the API key secure, create a new file named .env.local in the root directory and add:
REACT_APP_NEWS_API=your_api_key_here
👉 Replace your_api_key_here with your NewsAPI key.
(Your API key will remain hidden and not exposed in the code.)

🚀 4. Start the Application
Run the development server:
npm start
Now open 👉 http://localhost:3000/
 in your browser to explore InfoPulse.

📦 5. Build for Production
To create an optimized production build, run:
npm run build
The build will be available inside the build/ folder, ready for deployment.


## 👨‍💻 Author

 **Lucky Kumar**  
  - GitHub: [luckykumar1620](https://github.com/luckykumar1620)  
  - LinkedIn: [Lucky Kumar](https://www.linkedin.com/in/lucky-kumar-56023a262/)  
  - Email: lucky9110132241@gmail.com
