Package.describe({
  summary: "Client-Side Device Type Detection & Template Switching with Optional Meteor-Router Support"
});

Package.on_use(function (api) {
  api.use(['underscore', 'deps', 'session', 'ui', 'spacebars'], 'client');

  api.add_files(['device_detection.js', 'device_helpers.js'], 'client');
});
