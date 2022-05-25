const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'mapquest',
  httpAdapter : "https",
  //fetch: customFetchImplementation,
  apiKey: '69KLdKjwkeugNGkbHJ0ct4bgq47t6nmI',
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);
module.exports = geocoder
