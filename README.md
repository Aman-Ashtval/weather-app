# weatherApp (search weather by specific city)

This is an weather search app, where an user can search the weather by specific city and also toggle the app theme (dark/light).

## App Views

- light theme views
  
![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1718526725/Screenshot_2024-06-16_134812_pxtmal.png) 

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1718526725/Screenshot_2024-06-16_134852_uredi6.png) 

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1718526726/Screenshot_2024-06-16_140007_a5kz80.png) 

- dark theme views

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1718526725/Screenshot_2024-06-16_134826_qhvdpx.png) 

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1718526725/Screenshot_2024-06-16_134905_eb6rgg.png) 

![Screenshot](https://res.cloudinary.com/dh4dcboea/image/upload/v1718526725/Screenshot_2024-06-16_134905_eb6rgg.png) 

## Components Structure

- App.js -> Implementing context Provider component and rendering home component, etc.

- Home -> Rendering Header and weaterInfo component.

- Header.js -> It contains app Logo and toggle theme button, etc.

- SearchView.js -> It contains user input feilds to take the input as city name and send it to weatherInfo component and search city weather, etc.

- WeatherInfo.js -> It is the main component of application it contains api calling and different type views like failure, success, progress, etc.

- Loader.js -> It has the loader view for other components.

- AppContext.js -> Implementing react context API.


## About

This is an weather search app, where an user can search the weather by specific city and also toggle the app theme (dark/light).

## Demo

click on this link to watch the demo -> https://amanweather.ccbp.tech

## Technologies Used

- React
- React Hooks
- Rest API
- React Icon's
- Bootstrap
- CSS animations
- etc.

## Installation

install all the dependencies using 'npm install' run the application using 'npm start'
