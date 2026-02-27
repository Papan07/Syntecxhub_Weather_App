# WeatherX - Weather Application

A modern, fast, and intuitive weather application built with React and Vite. Get real-time weather information and forecast data for any city in the world.

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions including temperature, description, humidity, wind speed, and more
- **5-Day Forecast**: View weather predictions for the next 5 days (daily forecasts at 12 PM)
- **City Search**: Easily search for any city worldwide
- **Error Handling**: Smart error notifications for invalid cities or API issues
- **Responsive Design**: Beautiful, clean UI that works seamlessly across devices
- **Animated Feedback**: Interactive animations for error states and user interactions

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: CSS3
- **API**: OpenWeatherMap API
- **Package Manager**: npm
- **Code Quality**: ESLint with React plugins

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## 🚀 Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd Syntecxhub_Weather_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your OpenWeatherMap API key:
     ```
     VITE_API_KEY=your_api_key_here
     ```
   - Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

## 💻 Available Scripts

- **`npm run dev`** - Start the development server (runs on http://localhost:5173)
- **`npm run build`** - Create a production build
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 🎯 Usage

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

3. **Search for a city** by typing in the search bar and clicking "Search" (or pressing Enter)

4. **View weather information**:
   - Current temperature in Celsius
   - Weather description
   - Additional details like humidity and wind speed
   - 5-day forecast with daily predictions

## 📁 Project Structure

```
Syntecxhub_Weather_App/
├── src/
│   ├── components/
│   │   ├── Weather.jsx       # Main weather component
│   │   └── Weather.css       # Weather component styles
│   ├── App.jsx               # Main App component
│   ├── App.css               # App styles
│   ├── main.jsx              # React entry point
│   ├── index.css             # Global styles
│   └── assets/               # Static assets
├── public/                   # Public static files
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## 🔑 Key Components

### Weather Component (`src/components/Weather.jsx`)
The main component that handles:
- Fetching current weather data from OpenWeatherMap API
- Fetching 5-day forecast data
- Managing search state and error handling
- Rendering weather information and forecast

**Features**:
- Default city: London
- API calls use metric units (Celsius)
- Error notifications with automatic dismissal
- Shake animation for error states
- Responsive layout with left and right sections

## 🌐 API Integration

The app uses the **OpenWeatherMap API** with two endpoints:

1. **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
2. **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`

### Required API Key Setup
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Generate a free API key
3. Add it to your `.env` file as `VITE_API_KEY`

## 🎨 Styling

The application features:
- Custom CSS styling in `Weather.css` and `App.css`
- Modern, clean design with intuitive layout
- Shake animation for error states
- Responsive layout that adapts to different screen sizes

## ⚠️ Error Handling

The app includes comprehensive error handling:
- **Invalid City**: "⚠️ City not found. Please enter a valid city."
- **Empty Input**: "⚠️ Please enter a city name"
- **API Errors**: Displays error messages with shake animation
- **Auto-dismissal**: Error notifications automatically clear after 3 seconds

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

## 🚀 Deployment

You can deploy this app to various platforms:
- **Vercel**: Connect your GitHub repo to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect your GitHub repo
- **GitHub Pages**: Configure GitHub Actions for CI/CD
- **Any Static Host**: Upload the `dist/` folder to any static hosting service

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

**Built with ❤️ by SyntecxHub**
