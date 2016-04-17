define(['backbone'], function(Backbone) {
  var Song = Backbone.Model.extend({
    defaults: {
      title: '',
      artist: ''
    },
    validation: {
      title: {
        required: true
      },
      artist: {
        required: true
      }
    }
  });
  return Song;
});
