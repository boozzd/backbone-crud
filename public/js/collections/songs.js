define(['backbone', 'models/song'], function (Backbone, Song) {
  var Songs = Backbone.Collection.extend({
    url: function() {
      return '/songs';
    },
    model: Song
  });
  return Songs;
})