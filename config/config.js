/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Korea Holiday",
			position: "top_left",
			config: {
                                maximumEntries : 5,
                                timeFormat : "absolute",
                                dateFormat : "Do",
                                fullDayEventDateFormat : "YYYY-MM-DD",
                                showEnd : false,
                                fade : false,
				calendars: [
					{
						symbol: "bomb",
						url: "https://p03-calendars.icloud.com/holidays/kr_ko.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
                        config : {
                                updateInterval: 5000,
                                fadeSpeed: 500,
                                compliments: {
                                    day_sunny: [
                                        "Today is a sunny day",
                                        "It's a beautiful day"
                                    ],
                                    day_cloudy: [
                                        "day cloudy"
                                    ],
                                    cloudy: [
                                        "cloudy"
                                    ],
                                    cloudy_windy: [
                                        "cloudy windy"
                                    ],
                                    showers: [
                                        "showers"
                                    ],
                                    rain: [
                                        "rain"
                                    ],
                                    thunderstorm: [
                                        "thunderstorm"
                                    ],
                                    snow: [
                                        "Snowball battle!"
                                    ],
                                    fog: [
                                        "fog"
                                    ],
                                    night_clear: [
                                        "night clear"
                                    ],
                                    night_cloudy: [
                                        "night cloudy"
                                    ],
                                    night_showers: [
                                        "night showers"
                                    ],
                                    night_rain: [
                                        "night rain"
                                    ],
                                    night_thunderstorm: [
                                        "night thunderstorm"
                                    ],
                                    night_snow: [
                                        "night snow"
                                    ],
                                    night_alt_cloudy_windy: [
                                        "night alt cloudy windy"
                                    ],
                                    anytime: [
                                        "Hey there sexy!"
                                    ],
                                    morning: [
                                        "Good morning, handsome!",
                                        "Enjoy your day!",
                                        "How was your sleep?"
                                    ],
                                    afternoon: [
                                        "Hello, beauty!",
                                        "You look sexy!",
                                        "Looking good today!"
                                    ],
                                    evening: [
                                        "Wow, you look hot!",
                                        "You look nice!",
                                        "Hi, sexy!"
                                    ]
                                }
                        }
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
                                showHumidity: true,
                                showWindDirection: false,
                                showFeelsLike: false,
                                showWind: false,
                                showSunset: true,
                                //useBeaufort: false,
                                //useKMPHWind: true,
                                //onlyTemp: true,
				location: "Busan",
				locationID: "1838524",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "your api id"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
                                maxNumberOfDays: 3,
                                showRainAmount: true,
                                fade: false,
                                colored: 'true',
				location: "Busan",
				locationID: "1838524",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "your api id"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
                                showDescription: true,
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
