# Trading Chart Dashboard

## Features
- Real-time candlestick chart updates
- Interactive tooltips showing OHLC data
- Historical data loading on scroll
- Responsive design
- Continuous price data generation
- Continuous price data generation

## Technologies Used
- React 18
- TypeScript
- TradingView Lightweight Charts
- Styled Components
- Date-fns
- Docker

## Getting Started
- Node.js (v18 or higher)
- npm or yarn
- Docker (optional)


### Installation
1. Clone the repository:
```bash
git clone https://github.com/destroyer-art/trading-dashboard-chart
cd trading-dashboard-chart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```


### Docker Setup


1. Build the Docker image:
```bash
docker build -t trading-chart-app .
```

2. Run the container:
```bash
docker run -p 3000:3000 trading-chart-app
```

The application will be available at `http://localhost:3000`