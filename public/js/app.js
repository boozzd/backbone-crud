define([
  'router',
  'collections/songs'
], function(Router, SongsCollection) {
  _.extend(Backbone.Validation.callbacks, {
    valid: function (view, attr, selector) {
      var $el = view.$('[name=' + attr + ']'),
        $group = $el.closest('.form-group');

      $group.removeClass('has-error');
      $group.find('.help-block').html('').addClass('hidden');
    },
    invalid: function (view, attr, error, selector) {
      var $el = view.$('[name=' + attr + ']'),
        $group = $el.closest('.form-group');

      $group.addClass('has-error');
      $group.find('.help-block').html(error).removeClass('hidden');
    }
  });
  var initialize = function() {
    Router.initialize();
  }
  return {
    initialize: initialize
  }
});
