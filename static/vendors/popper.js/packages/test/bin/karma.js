#!/usr/bin/env node
const path = require('path');
const { Server, config } = require('static/vendors/popper.js/packages/test/bin/karma');

const karmaConfig = config.parseConfig(
  path.resolve(__dirname, '../karma.conf.js')
);

const server = new Server(karmaConfig, exitCode => {
  console.log('Karma has exited with ' + exitCode);
  process.exit(exitCode);
});

server.start();
