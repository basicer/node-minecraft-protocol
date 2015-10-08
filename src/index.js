var Client = require('./client');
var Server = require('./server');
var serializer = require("./transforms/serializer");
var utils = require("./utils");
var readPackets = require("./packets").readPackets;
var createClient = require("./createClient");
var createServer = require("./createServer");

module.exports = {
  createClient: createClient,
  createServer: createServer,
  Client: Client,
  Server: Server,
  states: serializer.states,
  createSerializer:serializer.createSerializer,
  createDeserializer:serializer.createDeserializer,
  readPackets:readPackets,
  ping: require('./ping'),
  supportedVersions:require("./version").supportedVersions,
  minecraftVersion: '1.8', //For Now
  mcVersion: '1.8'
};
