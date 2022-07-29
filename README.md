
<h3 align="center">COVID-Tracker</h3>
<div align="center">
  
  [![GitHub contributors](https://img.shields.io/github/contributors/Oaik/COVID-Tracker)](https://github.com/Oaik/COVID-Tracker/contributors)
  [![GitHub issues](https://img.shields.io/github/issues/Oaik/COVID-Tracker)](https://github.com/Oaik/COVID-Tracker/issues)
  [![GitHub forks](https://img.shields.io/github/forks/Oaik/COVID-Tracker)](https://github.com/Oaik/COVID-Tracker/network)
  [![GitHub stars](https://img.shields.io/github/stars/Oaik/COVID-Tracker)](https://github.com/Oaik/COVID-Tracker/stargazers)
  [![GitHub license](https://img.shields.io/github/license/Oaik/Reddit)](https://github.com/Oaik/COVID-Tracker/blob/master/LICENSE)
  <img src="https://img.shields.io/github/languages/count/Oaik/COVID-Tracker" />
  <img src="https://img.shields.io/github/languages/top/Oaik/COVID-Tracker" />
  <img src="https://img.shields.io/github/languages/code-size/Oaik/COVID-Tracker" />
  <img src="https://img.shields.io/github/issues-pr-raw/Oaik/COVID-Tracker" />
</div>

## Table of Contents
- [About the Project](#about)
  - [Build with](#build-with)
- [Design of Database](#design-of-database)
- [Design of API](#design-of-api)
- [Front-End](#front-end)
- [UI-UX](#ui-ux)
- [Screenshots for the website](#built-with)

## About
  > Covid-Tracker is a fully responsive tracker app that is used for recording logs with temperature in each country built using [reactjs](https://reactjs.org/).

### Built with
<ul>
<li>
<a href="https://nodejs.org/en/">Nodejs</a>
</li>
<li>
<a href="https://expressjs.com/">Express</a>
</li>
<li>
<a href="https://www.mongodb.com/">MonogoDB</a>
</li>
<li>
<a href="https://reactjs.org/">Reactjs</a>
</li>
</ul>

## Design of Database
First step is creating the database of our backend
mainly we will have 2 tables
- User Table
- Logs Table

you can see the schema <a href="https://dbdiagram.io/d/62e03cde0d66c746555703fc">here</a>

<img src="/screenshots/COVID-Tracker.png" />

Node: there will be an index on country column so we can fetch queries for <b>single country</b> faster

## Design of API

The API made in postman you can include the collection in your own postman <a href="/postman-collection/COVID-Tracker.postman_collection.json">JSON File</a>.

Read postman docmentation collection for <a href="https://documenter.getpostman.com/view/1537357/UzXNSwq1">COVID-Tracker</a>

#### registration/login:
<ul>
  <li>
    Login
    <ul>
      <li> 
        post request to: localhost:3000/api/login
        <pre>
        BODY
        {
            "email": "email@gmail.com",
            "password": "asd123"
        }
        </pre>
      </li>
    </ul>
  </li>
    <li>
    Register
    <ul>
      <li> 
        post request to: localhost:3000/api/register
        <pre>
        BODY
        {
            "email": "email@gmail.com",
            "name": "omar",
            "password": "ENCRYPTasd123"
        }
        </pre>
      </li>
    </ul>
  </li>
</ul>


#### Profile:
<ul>
  <li>
    Update Profile
    <ul>
      <li> 
        PUT request to: http://localhost:8000/api/profile/:id
        <code>
        "Header with AUTHORIZATION: Bearer Token"
        </code>
        <br/>
        <pre>
          Body: {
            "name": "New Name"
          }
        </pre>
      </li>
    </ul>
  </li>
  
  <li>
    get current profile
    <ul>
      <li> 
        Get request to: http://localhost:8000/api/profile
      </li>
    </ul>
  </li>
  
  <li>
    Get user profile with id
    <ul>
      <li> 
        Get request to: http://localhost:8000/api/profile/:id
      </li>
    </ul>
  </li>
</ul>

#### Logs:
<ul>
  <li>
    Create log
    <ul>
      <li> 
        POST request to: http://localhost:8000/api/log
        <code>
        "Header with AUTHORIZATION: Bearer Token"
        </code>
        <br/>
        <pre>
          Body: {
          "temperature": 38,
          "latitude": 48.0232,
          "longitude": 48.0232,
          "age": 22,
          "gender": true,
          "isVaccinated": true,
          "timestamp": "2023-04-23T18:25:43.511Z"
          }
        </pre>
      </li>
    </ul>
  </li>
  
  <li>
    get log
    <ul>
      <li> 
        Get request to: http://localhost:8000/api/logs
      </li>
    </ul>
  </li>
  
  <li>
    get log in country
    <ul>
      <li> 
        Get request to: http://localhost:8000/api/logs?country=COUNTRYNAME
      </li>
    </ul>
  </li>
</ul>

## Front-End
We will have 6 pages:
- Home Page
- Login page
- Register Page
- Profile page
- Create Log Page
- Dashboard page


## UI-UX
I have collected images for the project from unsplash the images this is the list of images I have collected
- https://unsplash.com/photos/Q1p7bh3SHj8
- https://unsplash.com/photos/Besxfn2Z8fo
- https://unsplash.com/photos/gOuKQTLs2lc
- https://unsplash.com/photos/QAAMEm1fyIQ
- https://unsplash.com/photos/-p-KCm6xB9I

- https://unsplash.com/photos/ZODcBkEohk8