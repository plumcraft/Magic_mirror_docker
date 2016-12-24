/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var rss_urls = 
[{
 title: "Yahoo France",
 url: "https://fr.finance.yahoo.com/actualites/categorie-europe/?format=rss"
}, {
 title: "Journal du Geek",
 url: "http://feeds2.feedburner.com/LeJournalduGeek"
}, {
 title: "Be Geek",
 url: "http://www.begeek.fr/feed"
}, {
 title: "Korben",
 url: "http://korben.info/feed"
}, {
 title: "Github",
 url: "https://github.com/plumcraft.private.atom?token=ENV_GITHUB_TOKEN"
}, {
 title: "Topito",
 url: "http://feeds.feedburner.com/topito"
}, {
 title: "Abavala",
 url: "http://www.abavala.com/feed/"
}, {
 title: "Magdiblog",
 url: "http://www.magdiblog.fr/feed/"
}, {
 title: "BFM TV",
 url: "http://www.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/"
}]

var alert	= { module: 'alert' };

var facial	= { module: 'mmm-facial-recognition', config: { useUSBCam: true, interval: 1, logoutDelay: 120, users: ['plumcraft'] } };

var stocks	= { module: 'mmm-stocks', position: 'top_bar', config: { stocks: 'ENV_STOCKS' , updateInterval: 37000 }, classes: 'plumcraft' };

var clock	= { module: 'clock', position: 'top_left', classes: 'everyone' };
var weather	= { module: 'mmm-wunderground', position: 'top_left', config: { apikey: 'ENV_WEATHER_API_KEY' , pws: 'ENV_WEATHER_PWS' , hourly: '1' }, classes: 'everyone' };
var calendarnrx = { module: 'calendar', position: 'top_left', config: { calendars: [{ symbol: 'calendar-check-o', url: 'https://calendar.google.com/calendar/ical/ENV_GMAIL_ADDRESS/private-ENV_CALENDAR_TOKEN/basic.ics' }] }, classes: 'plumcraft' };

var cpasbien    = { module: 'mmm-cpasbien', position: 'top_right', classes: 'plumcraft' };
var hue		= { module: 'mmm-hue', position: 'top_right', config: { bridgeip: 'ENV_HUE_BRIDGE_IP' , userid: 'ENV_HUE_USER_ID' ,colour: true}, classes: 'plumcraft' };
var sonos       = { module: 'mmm-sonos', position: 'top_right', config: { apiBase: 'http://ENV_SONOS_HTTP_API_ADDRESS', updateInterval: 0.1 }, classes: 'everyone' };

var hide	= { module: 'mmm-hide-all', position: 'bottom_right', classes: 'plumcraft' };

var voice	= { module: 'mmm-voice', position: 'bottom_bar', config: { keyword: 'ENV_VOICE_CODE' , microphone: 1, debug: true }, classes: 'plumcraft' };
var fluxrss	= { module: 'newsfeed', position: 'bottom_bar', config: { feeds: rss_urls, showSourceTitle: true, showPublishDate: true }, classes: 'plumcraft' };

var config = {
    port: 8080,
    language: 'fr',
    timeFormat: 24,
    units: 'metric',
    modules: [ alert, facial, stocks, clock, weather, calendarnrx, cpasbien, hue, sonos, hide, voice, fluxrss ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
