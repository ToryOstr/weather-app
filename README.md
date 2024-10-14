# Weather application
Documentation
## Overview
This project is a React application built using Vite and optimized with SWC for fast compilation. Vite provides a modern development toolset, while SWC significantly improves the JavaScript and JSX transpilation process.

## Technologies:
- Vite: A modern build tool that provides a fast development environment, utilizing Esbuild for pre-bundling and distributed caching.

- React: A library for building user interfaces.

- SWC: A fast JavaScript/JSX compiler that replaces Babel, offering enhanced speed and optimizations.

## Project Setup:

Project Initialization The project was created using Vite:

`` 
npm create vite@latest 
``

## Build Process The project is built using SWC for fast transpilation:

SWC is configured in Vite for improved performance during development and build phases.

## Running and Building:

### Development Mode:

``
npm run dev
``

### Production Build:

``
npm run build
``

## Project Structure

The application is built using functional components and is divided into Containers and UI Components.

```
weather-app/
│
├── public/
│   └── icon.ico
│
├── src/
│   ├── assets/
│   |      └── WeatherIcon/
|   |          ├── weathericon/      # There are weather images 
│   |          ├── WeatherIcon.jsx   # There are paths of the weather images used in the UI component WeatherCard
│   ├── components/                  # There are UI-components 
|   ├── containers/                  # There are container-components
|   ├── index.css
|   ├── index.jsx
├── index.html
├── README.md
├── .gitignore
├── vite.config.js
├── .eslintrc.cjs
├── package.json
├── package-lock.json
└── API.js # This file was added to gitignore rules

```

In component Logo use [frame-motion](https://www.npmjs.com/package/framer-motion?activeTab=readme) library