/**
  * @module WeatherAPILib
  *
  * # Introduction  WeatherAPI.com provides access to weather and geo data via a JSON/XML restful
  * API. It allows developers to create desktop, web and mobile applications using this data very
  * easy.  We provide following data through our API:    * Real-time weather    * 10 day weather
  * forecast    * Astronomy    * Time zone    * Location data    * Search or Autocomplete API    *
  * NEW: Historical weather  # Getting Started  You need to [signup](https://www.weatherapi.
  * com/signup.aspx) and then you can find your API key under [your account](https://www.weatherapi.
  * com/login.aspx), and start using API right away!  If you find any features missing or have any
  * suggestions, please [contact us](https://www.weatherapi.com/contact.aspx).  # Authentication
  * API access to the data is protected by an API key. If at anytime, you find the API key has
  * become vulnerable, please regenerate the key using Regenerate button next to the API key.
  * Authentication to the WeatherAPI.com API is provided by passing your API key as request
  * parameter through an API .    ##  key parameter   key=YOUR_API_KEY
  */

'use strict';

const Configuration = require('./configuration');
const APIsController = require('./Controllers/APIsController');
const CurrentJsonResponse = require('./Models/CurrentJsonResponse');
const Location = require('./Models/Location');
const Current = require('./Models/Current');
const Condition = require('./Models/Condition');
const ForecastJsonResponse = require('./Models/ForecastJsonResponse');
const Forecast = require('./Models/Forecast');
const Forecastday = require('./Models/Forecastday');
const Day = require('./Models/Day');
const Astro = require('./Models/Astro');
const HistoryJsonResponse = require('./Models/HistoryJsonResponse');
const Forecast1 = require('./Models/Forecast1');
const Forecastday1 = require('./Models/Forecastday1');
const Hour = require('./Models/Hour');
const SearchJsonResponse = require('./Models/SearchJsonResponse');
const IpJsonResponse = require('./Models/IpJsonResponse');
const TimezoneJsonResponse = require('./Models/TimezoneJsonResponse');
const AstronomyJsonResponse = require('./Models/AstronomyJsonResponse');
const Astronomy = require('./Models/Astronomy');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of WeatherAPILib
    Configuration,
    // controllers of WeatherAPILib
    APIsController,
    // models of WeatherAPILib
    CurrentJsonResponse,
    Location,
    Current,
    Condition,
    ForecastJsonResponse,
    Forecast,
    Forecastday,
    Day,
    Astro,
    HistoryJsonResponse,
    Forecast1,
    Forecastday1,
    Hour,
    SearchJsonResponse,
    IpJsonResponse,
    TimezoneJsonResponse,
    AstronomyJsonResponse,
    Astronomy,
    // exceptions of WeatherAPILib
    APIException,
};

module.exports = initializer;
