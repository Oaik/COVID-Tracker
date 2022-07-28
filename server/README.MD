


## How to run the server

<b>be sure that you are in the directory of the sever</b>
> cd server

<b>Install all the dependencies by</b>
> npm install

<b>To run the server simply run the command start</b>
> npm start

In the CLI you will see
<code>Server running on port 8000</code>
The server now runs on port <b>8000</b> by default but you can change the port

You can find the <a href="https://github.com/Oaik/COVID-Tracker/edit/main/README.md#design-of-database"> Design of the database </a>

Also the <a href="https://github.com/Oaik/COVID-Tracker/edit/main/README.md#design-of-api"> API Design </a>


## Built with
Nodejs, express, monogodb

Used JWT for authentication


## other apis used

Note: I used <a href="api.geonames.org">GeoNames API</a> which is free api used to give you country info based on latitude and longitude
you will need a username to make a request.


in order to make a request go geonames api make a get request to:
http://api.geonames.org/countryCodeJSON?lat=${latitude}&lng=${longitude}&username=${username}


response request will be in form to:
<code>
{
    "languages":"tr-TR,ku,diq,az,av",
    "distance":"0",
    "countryCode":"TR",
    "countryName":"Turkey"
}
</code>