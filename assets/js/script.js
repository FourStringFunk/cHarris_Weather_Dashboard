// Store API KEY for use in fetch request
const apiKey = '61f3651f9a5ee983973c3a5ec6762bd2';

// Fetch request for current weather conditions, parsed to current weather section.
// Fetch request for future weather conditions, parsed to future weather section.
function weatherDataRequest() {
    
}

// WHEN I view current weather conditions for that city, THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// NEEDED
// Display current location name (from search), date (DayJS?), and time (DayJS)
// Display icons of the various weather conditions
// Display temperature, humidity and wind speed

// WHEN I view future weather conditions for that city, THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// NEEDED
// Display current location name (from search)
// Display 5-day forecast with date, icon of weather conditions, temp, wind speed, and humidity


// WHEN I search for a city, THEN I am presented with current and future conditions for that city and that city is added to the search history
// NEEDED
// Event listener for search form submit
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Capture the city name input by the user
    var cityName = document.getElementById('cityName').value;
    console.log(cityName);

    // function to change page and display information from API
});

// WHEN I click on a city in the search history, THEN I am again presented with current and future conditions for that city
// NEEDED
// Append search results to search history section
// Event listener for search history click
document.getElementById('searchHistory').addEventListener('click', function(event) {
    event.preventDefault();
    // how do I display the search history to the searchHistory div?
    // if a search was searched, save value to local storage
    // pull value from local storage and append to search history div as ul/li, button, or a?
});