/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var alert	= { module: 'alert' };
var remote      = { module: 'mmm-remote-control' };
var admin	= { module: 'mmm-admin-interface' };
var facial	= { module: 'mmm-facial-recognition', config: { useUSBCam: true, interval: 1, logoutDelay: 120, users: ['plumcraft'] } };

/* FULLSCREEN AFOBE */
var navbar	= { module: 'mmm-navbar', position: 'fullscreen_above', classes: 'default' };

/* TOP BAR */
var stocks	= { module: 'mmm-stocks', position: 'top_bar', config: { stocks: 'ENV_STOCKS' , updateInterval: 37000 }, classes: 'plumcraft' };

/* TOP LEFT */
var clock	= { module: 'clock', position: 'top_left', classes: 'everyone' };
var weather	= { module: 'mmm-wunderground', position: 'top_left', config: { apikey: 'ENV_WEATHER_API_KEY' , pws: 'ENV_WEATHER_PWS' , hourly: '1' }, classes: 'everyone' };
var calendarnrx = { module: 'calendar', position: 'top_left', config: { calendars: [{ symbol: 'calendar-check-o', url: 'https://calendar.google.com/calendar/ical/ENV_GMAIL_ADDRESS/private-ENV_CALENDAR_TOKEN/basic.ics' }] }, classes: 'plumcraft' };

/* TOP RIGHT */
var cpasbien    = { module: 'mmm-cpasbien', position: 'top_right', classes: 'plumcraft' };
var hue		= { module: 'mmm-hue', position: 'top_right', config: { bridgeip: 'ENV_HUE_BRIDGE_IP' , userid: 'ENV_HUE_USER_ID' ,colour: true}, classes: 'plumcraft' };
var sonos       = { module: 'mmm-sonos', position: 'top_right', config: { apiBase: 'http://ENV_SONOS_HTTP_API_ADDRESS', updateInterval: 0.1 }, classes: 'everyone' };
var netscan	= { module: 'mmm-networkscanner', position: 'top_right', config: { devices: [ ENV_NET_DEVICES ], showUnknown: true, showOffline: true, keepAlive: 300, updateInterval: 15 }, classes: 'everyone' };

/* BOTTOM LEFT */
var netatmo	= { module: 'mmm-netatmo', position: 'bottom_left', config: { clientId: 'ENV_NETATMO_CLIENT_ID', clientSecret: 'ENV_NETATMO_CLIENT_SECRET', refreshToken: 'ENV_NETATMO_TOKEN', refreshInterval: 3, moduleOrder: ["Intérieur", "Salon", "Extérieur"] }, classes: 'default' }

/* BOTTOM RIGHT */
var hide	= { module: 'mmm-hide-all', position: 'bottom_right', classes: 'plumcraft' };

/* BOTTOM BAR */
var voice	= { module: 'mmm-voice', position: 'bottom_bar', config: { keyword: 'ENV_VOICE_CODE' , microphone: 1, debug: true }, classes: 'plumcraft' };
var fluxrss	= { module: 'newsfeed', position: 'bottom_bar', config: { feeds: [ ENV_RSS_FEED ], showSourceTitle: true, showPublishDate: true }, classes: 'plumcraft' };

var config = {
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","::ffff:192.168.0.16"],
    language: 'fr',
    timeFormat: 24,
    units: 'metric',
    modules: [ alert, remote, admin, facial, navbar, stocks, clock, weather, calendarnrx, cpasbien, hue, sonos, netscan, netatmo, hide, voice, fluxrss ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
