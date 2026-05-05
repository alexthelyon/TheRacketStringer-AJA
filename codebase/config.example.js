// Copy this file to config.js and fill in your values.
// config.js is gitignored - never commit the real keys.
//
// API key: https://console.cloud.google.com/ → APIs & Services → Credentials
//   Enable: "Places API (New)"
//   Restrict the key to your domain for security.
//
// Place ID: go to https://maps.google.com, search "The Racket Stringer Desborough",
//   click the listing, then copy the Place ID from the URL:
//   maps.google.com/?cid=... or look for "place_id=" in the share link.
//   Alternatively use: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder

const RACKET_STRINGER_CONFIG = {
  googleMapsApiKey: 'PASTE_YOUR_API_KEY_HERE',
  googlePlaceId:    'PASTE_YOUR_PLACE_ID_HERE'
};
