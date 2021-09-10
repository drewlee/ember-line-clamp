'use strict';

module.exports = {
  name: 'ember-line-clamp',
  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/ember-line-clamp/vendor.css');
  }
};
