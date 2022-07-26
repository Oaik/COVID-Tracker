
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
- [Design of Database](#design-of-database)
- [Design of API](#design-of-api)
- [Built with](#built-with)

## Design of Database
First step is creating the database of our backend
mainly we will have 2 tables
- User Table
- Logs Table

<img src="/screenshots/COVID-Tracker.png" />

Node: there will be an index on country column so we can fetch queries for single country faster

you can see the schema <a href="https://dbdiagram.io/d/62e03cde0d66c746555703fc">here</a>

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

## Built with
<ul>
<li>Nodejs</li>
<li>Express</li>
<li>MonogoDB</li>
</ul>



