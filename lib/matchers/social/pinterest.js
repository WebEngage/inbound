
var _ = require('underscore');

module.exports = function (href, referrer, callback) {

  var description = false;

  if (referrer.host && referrer.host.indexOf('pinterest.com') !== -1) {
    description = {type: 'social', network: 'pinterest', url : referrer.href, host : referrer.host};

    if (referrer.path) {
      var tokens = referrer.path.split('/');
      var index = _.indexOf(tokens, 'pin');
      if (index !== -1) {
        description.pin = tokens[index + 1];
      }
    }
  }

  return callback(null, description);
};