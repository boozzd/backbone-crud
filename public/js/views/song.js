define(['jquery', 'underscore', 'backbone', 'text!templates/song.html'], function($, _, Backbone, template) {
  var SongView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template(template),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    initialize: function() {
      this.songChannel = Backbone.Radio.channel('songs');
    },
    events: {
      'click button.delete': 'deleteSong',
      'click button.edit': 'editSong'
    },
    deleteSong: function(e) {
      this.model.destroy();
    },
    editSong: function(e) {
      this.songChannel.request('edit', this.model.id);
    }
  });
  return SongView;
});
