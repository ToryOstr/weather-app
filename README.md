# Weather application
Description
## Overview
This is a React application. It was built using Vite and optimized with SWC for fast compilation. Vite provides a modern development toolset, while SWC significantly improves the JavaScript and JSX transpilation process.

## Technologies:
- Vite: A modern build tool that provides a fast development environment, utilizing Esbuild for pre-bundling and distributed caching.

- React: A library for building user interfaces.

- SWC: A fast JavaScript/JSX compiler that replaces Babel, offering enhanced speed and optimizations.

## Project Setup:

The project created using Vite:

`` 
npm create vite@latest 
``

## Build Process 

The project was built using SWC for fast transpilation:

SWC configured in Vite for improved performance during development and build phases.

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

The application was built using functional components and divided for Containers and UI Components.

```
weather-app/
│
├── public/
│   └── icon.ico
│
├── src/
│   ├── assets/
│   |      └── WeatherIcon/
|   |          ├── weathericon/      # There are images of the weather
│   |          ├── WeatherIcon.jsx   # There are paths  into images of the weather used in the UI component WeatherCard in this file
│   ├── components/                  # There are UI-components 
|   ├── containers/                  # There are container-components
|   ├── index.css                    # A css file resets default styles of the page.

|   ├── index.jsx                   # This file creates a root element and renders the app into the it.
├── index.html
├── README.md
├── .gitignore
├── vite.config.js
├── .eslintrc.cjs
├── package.json
├── package-lock.json
└── API.js # This file containe api-keys. It is added to gitignore rules

```

## HOW DOES IT WORK ?
### index.jsx
There is import the React, the ReactDOM, the component App and a css default style in the index.jsx file.
The index.jsx creates the root element and renders the app into the it.

### App.jsx
The background of the App is a looped short video.

The component App imports 3 containers :
- Header
- Main
- Footer

The component App uses an useState hook to save a search data, when that passes from a component MainContainer. 
When component App gets search data, it makes an API call to the openweather services and passes a response back to the component MainContainer

### Header.jsx
The component Header consists of components Logo and FormatDate.

#### Logo.jsx
The component Logo uses a [frame-motion library](https://www.npmjs.com/package/framer-motion?activeTab=readme) to build an animanion in the component.

#### FormatDate.jsx
This component gets a timestamp  as a prop and converts it into a human-readable format.
This component is used in the  components Header and a WeatherCard.

### MainContainer.jsx

The MainContainer component serves as a wrapper for the main content of the application. It includes a search bar and dynamically renders child components.

The handleOnSearchChange function is used to pass search data from the Search component to the parent via onHandleGetSearchData.

The children prop allows for flexible content placement within the container.

#### Search.jsx
The Search component allows users to search for cities using the GeoDB Cities API. It utilizes the react-select-async-paginate library to asynchronously fetch city suggestions based on user input.